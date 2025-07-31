import prisma from "../DATABASE/db.config.js";
import { v2 as cloudinary } from "cloudinary";

export const appointmentForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      gender,
      message,
      appointment,
      contactNumber,
      doctorId,
      userId,
      doctorname,
      terms,
      speciality,
    } = req.body;

    const prescription = req.file;
    //? Prescription Upload in cloudinary----------
    const prescriptionUpload = await cloudinary.uploader.upload(
      prescription.path,
      {
        resource_type: "auto",
      }
    );
    const prescription_url = prescriptionUpload.secure_url;
    const term = req.body.term === "true";
    const newAppointment = await prisma.appointment.create({
      data: {
        patient_first_name: firstName,
        patient_gender: gender,
        patient_last_name: lastName,
        patient_contact_number: contactNumber,
        patient_age: parseInt(age),
        doctor_name: doctorname,
        doctor_speciality: speciality,
        message,
        term: term,
        appointment_date_time: new Date(appointment),
        prescription_url: prescription_url,
        doctor: {
          connect: {
            id: doctorId,
          },
        },
        patient: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        patient: true,
        doctor: true,
      },
    });
    return res.status(200).json(newAppointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const patientAppointment = async (req, res) => {
  const patientId = req.userId;
  try {
    const myappointments = await prisma.appointment.findMany({
      where: {
        patient_id: patientId,
      },
      include: {
        doctor: true,
        patient: true,
      },
    });
    return res.status(200).json(myappointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    if (req.userRole !== "patient") {
      return res
        .status(403)
        .json({ message: "Access denied. Patient account required" });
    }
    const appointmentId = req.params.id;
    const patientId = req.userId;
    const deleteAppointment = await prisma.appointment.delete({
      where: {
        id: parseInt(appointmentId),
        patient_id: patientId,
      },
    });
    if (deleteAppointment.count === 0) {
      return res.status(404).json({
        message:
          "Appointment not found or you don't have permission to cancel it",
      });
    }
    if (deleteAppointment) {
      return res
        .status(200)
        .json({ message: "Appointment cancelled successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
