import prisma from "../DATABASE/db.config.js";
import { v2 as cloudinary } from "cloudinary";

export const appointmentForm = async (req, res) => {
  console.log(req.body);
  try {
    const {
      firstName,
      lastName,
      age,
      gender,
      message,
      appointment,
      contactNumber,
      lawyerId,
      userId,
      name,
      terms,
      speciality,
    } = req.body;

    const documents = req.file;
    console.log(documents);
    //? documents Upload in cloudinary----------
    const documentsUpload = await cloudinary.uploader.upload(documents.path, {
      resource_type: "auto",
    });
    const documents_url = documentsUpload.secure_url;
    const term = req.body.term === "true";
    const newAppointment = await prisma.appointment.create({
      data: {
        client_first_name: firstName,
        client_gender: gender,
        client_last_name: lastName,
        client_contact_number: contactNumber,
        client_age: parseInt(age),
        lawyer_name: name,
        lawyer_speciality: speciality,
        message,
        term: term,
        appointment_date_time: new Date(appointment),
        documents_url: documents_url,
        lawyer: {
          connect: {
            id: lawyerId,
          },
        },
        client: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        client: true,
        lawyer: true,
      },
    });
    return res.status(200).json(newAppointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const clientAppointment = async (req, res) => {
  const clientId = req.userId;
  try {
    const myappointments = await prisma.appointment.findMany({
      where: {
        client_id: clientId,
      },
      include: {
        lawyer: true,
        client: true,
      },
    });
    return res.status(200).json(myappointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const lawyersAppointment = async (req, res) => {
  const lawyerId = req.params.id;
  try {
    const myappointments = await prisma.appointment.findMany({
      where: {
        lawyer_id: lawyerId,
      },
      include: {
        lawyer: true,
        client: true,
      },
    });
    return res.status(200).json(myappointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    if (req.userRole !== "client") {
      return res
        .status(403)
        .json({ message: "Access denied. client account required" });
    }
    const appointmentId = req.params.id;
    const clientId = req.userId;
    const deleteAppointment = await prisma.appointment.delete({
      where: {
        id: parseInt(appointmentId),
        client_id: clientId,
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

export const lawyercancelAppointment = async (req, res) => {
  try {
    // Check for correct role property (should be userRole, not lawyer_role)
    if (req.lawyer_role  !== "lawyer") {
      return res.status(403).json({ message: "Access denied. Lawyer account required" });
    }
    const appointmentId = req.params.id;
    console.log(appointmentId);
    const lawyerId = req.lawyer_id;
    console.log(lawyerId);
    // Only allow lawyer to delete their own appointment
    const appointment = await prisma.appointment.findUnique({
      where: { id: parseInt(appointmentId) },
    });
    if (!appointment || appointment.lawyer_id !== lawyerId) {
      return res.status(404).json({
        message: "Appointment not found or you don't have permission to cancel it",
      });
    }
    await prisma.appointment.delete({
      where: { id: parseInt(appointmentId) },
    });
    return res.status(200).json({ message: "Appointment cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

