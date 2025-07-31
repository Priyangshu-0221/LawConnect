import jwt from "jsonwebtoken";
import prisma from "../DATABASE/db.config.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const createDoctor = async (req, res) => {
  const {
    name,
    email,
    password,
    speciality,
    degree,
    about,
    experience,
    address,
    fees,
  } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "ERRORR!! Enter a valid email",
    });
  } //validator
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "To be considered valid, the password must be at least eight characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special symbol—such as !, @, #, $, %, or ^,",
    });
  }
  const alreadyDoctor = await prisma.doctor.findUnique({
    where: {
      email: email,
    },
  });

  if (alreadyDoctor) {
    return res.status(400).json({
      message: "This email already exists, please login",
    });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newdoctor = await prisma.doctor.create({
        data: {
          name,
          email,
          password: hashedPassword,
          speciality,
          degree,
          about,
          experience,
          address,
          fees,
        },
      });
      const token = jwt.sign(
        { id: newdoctor.id, role: "doctor" },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "New user created successfully",
        token,
        role: "doctor",
      });
    } catch (error) {
      res.json(error);
    }
  }
};

export const loginDoctor = async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "ERRORR!! Enter a valid email",
    });
  }
  const alreadyDoctor = await prisma.doctor.findUnique({
    where: {
      email: email,
    },
  });
  try {
    const correctPassword = await bcrypt.compare(
      password,
      alreadyDoctor.password
    );
    if (!correctPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign(
        { id: alreadyDoctor.id, role: "doctor" },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "Login successful",
        token: token,
        role: "doctor",
      });
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ message: "Login successful" });
};

export const doctorProfile = async (req, res) => {
  try {
    if (req.userRole !== "doctor") {
      return res
        .status(403)
        .json({ message: "Access denied. Doctor account required" });
    }
    const doctorId = req.userId;
    const doctorData = await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });
    if (doctorData) {
      return res.status(200).json(doctorData);
    } else {
      return res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    if (req.userRole !== "doctor") {
      return res
        .status(403)
        .json({ message: "Access denied. Patient account required" });
    }
    const doctorId = req.userId;
    const { speciality, fees, experience, degree, about, address } = req.body;
    const updateProfile = await prisma.doctor.update({
      where: {
        id: doctorId,
      },
      data: {
        speciality,
        fees,
        experience,
        degree,
        about,
        address,
      },
    });
    if (updateProfile) {
      return res.status(200).json(updateProfile);
    } else {
      return res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const singleDoctor = async (req, res) => {
  try {
    const doctorId = req.query.id;
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });
    if (doctor) {
      return res.status(200).json(doctor);
    } else {
      return res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const allDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany({});
    console.log();
    if (doctors) {
      return res.status(200).json(doctors);
    } else {
      return res.status(404).json({ message: "No doctors found" });
    }
  } catch (error) {}
};

export const allAppointments = async (req, res) => {
  try {
    if (req.userRole !== "doctor") {
      return res
        .status(403)
        .json({ message: "Access denied. Patient account required" });
    }
    const doctortId = req.userId;
    const appointments = await prisma.appointment.findMany({
      where: {
        doctor_id: doctortId,
      },
      include: { patient: true },
    });
    if (appointments.length === 0) {
      return res.status(200).json(appointments);
    } else {
      return res.status(404).json({ message: "No appointments found" });
    }
  } catch (error) {}
};

export const cancelAppointment = async (req, res) => {
  try {
    if (req.userRole !== "doctor") {
      return res
        .status(403)
        .json({ message: "Access denied. Doctor account required" });
    }
    const appointmentId = req.params.id;
    const deleteAppointment = await prisma.appointment.delete({
      where: {
        id: appointmentId,
        doctor_id: req.userId,
      },
    });
    if (deleteAppointment) {
      return res
        .status(200)
        .json({ message: "Appointment cancelled successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
