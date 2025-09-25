import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../DATABASE/db.config.js";
import validator from "validator";

export const createclient = async (req, res) => {
  const { name, email, password } = req.body;
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
  } //validator
  const findUser = await prisma.client.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.status(400).json({
      message: "This email already exists, please login",
    });
  } else {
    try {
      const salt = await bcrypt.genSalt(10); //10runds performation of generating salt
      const hashedPassword = await bcrypt.hash(password, salt); //hashing the password so that it's not possbile to crackl
      const newclient = await prisma.client.create({
        //prisma code to create a new user
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      const userId = newclient.id;
      const token = jwt.sign(
        { id: newclient.id, role: "client" },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      console.log(token);
      return res.status(200).json({
        message: "New user created successfully",
        userId,
        token,
        name: newclient.name,
        role: "client",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error. Please try again later.",
      });
    }
  }
};

export const loginclient = async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "ERRORR!! Enter a valid email",
    });
  }
  const existedUser = await prisma.client.findUnique({
    where: {
      email: email,
    },
  });
  const userId = existedUser.id;
  try {
    if (!existedUser) {
      return res.status(401).json({ message: "Invalid Credentials" });
    } else {
      const validPassword = await bcrypt.compare(
        password,
        existedUser.password
      );
      if (!validPassword) {
        console.warn("Login failed: user not found or password mismatch");
        return res.status(401).json({ message: "Invalid Credentials" });
      } else {
        const token = jwt.sign(
          { id: existedUser.id, role: "client" },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        console.log(token);
        return res.status(200).json({
          message: "Login successful",
          token: token,
          userId,
          name: existedUser.name,
          role: "client",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
    });
  }
};

export const singleclient = async (req, res) => {
  try {
    if (req.userRole !== "client") {
      return res
        .status(403)
        .json({ message: "Access denied. client account required" });
    }
    const userId = req.userId;
    const clientData = await prisma.client.findUnique({
      where: {
        id: userId,
      },
    });
    if (!clientData) {
      return res.status(404).json({ message: "client not found" });
    }
    return res.status(200).json(clientData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateclient = async (req, res) => {
  try {
    if (req.userRole !== "client") {
      return res
        .status(403)
        .json({ message: "Access denied. client account required" });
    }
    const { address, gender, phone } = req.body;
    const userId = req.userId;
    const updateInfo = await prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        address,
        gender,
        phone,
      },
    });
    if (!updateInfo) {
      return res.status(404).json({ message: "client not found" });
    }
    return res.status(200).json(updateInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const allAppointments = async (req, res) => {
  try {
    if (req.userRole !== "client") {
      return res
        .status(403)
        .json({ message: "Access denied. client account required" });
    }
    const clientId = req.userId;
    const appointments = await prisma.appointment.findMany({
      where: {
        client_id: clientId,
      },
      include: { lawyer: true },
    });
    if (appointments.length === 0) {
      return res.status(200).json(appointments);
    } else {
      return res.status(404).json({ message: "No appointments found" });
    }
  } catch (error) {}
};

