import jwt from "jsonwebtoken";
import prisma from "../DATABASE/db.config.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const createlawyer = async (req, res) => {
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
  const alreadylawyer = await prisma.lawyer.findUnique({
    where: {
      email: email,
    },
  });

  if (alreadylawyer) {
    return res.status(400).json({
      message: "This email already exists, please login",
    });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newlawyer = await prisma.lawyer.create({
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
        { id: newlawyer.id, role: "lawyer" },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "New user created successfully",
        token,
        role: "lawyer",
      });
    } catch (error) {
      res.json(error);
    }
  }
};

export const loginlawyer = async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "ERRORR!! Enter a valid email",
    });
  }
  const alreadylawyer = await prisma.lawyer.findUnique({
    where: {
      email: email,
    },
  });
  try {
    const correctPassword = await bcrypt.compare(
      password,
      alreadylawyer.password
    );
    if (!correctPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign(
        { id: alreadylawyer.id, role: "lawyer" },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "Login successful",
        token: token,
        role: "lawyer",
      });
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ message: "Login successful" });
};

export const lawyerProfile = async (req, res) => {
  try {
    if (req.userRole !== "lawyer") {
      return res
        .status(403)
        .json({ message: "Access denied. lawyer account required" });
    }
    const lawyerId = req.userId;
    const lawyerData = await prisma.lawyer.findUnique({
      where: {
        id: lawyerId,
      },
    });
    if (lawyerData) {
      return res.status(200).json(lawyerData);
    } else {
      return res.status(404).json({ message: "lawyer not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatelawyer = async (req, res) => {
  try {
    if (req.userRole !== "lawyer") {
      return res
        .status(403)
        .json({ message: "Access denied. Patient account required" });
    }
    const lawyerId = req.userId;
    const { speciality, fees, experience, degree, about, address } = req.body;
    const updateProfile = await prisma.lawyer.update({
      where: {
        id: lawyerId,
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
      return res.status(404).json({ message: "lawyer not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const singlelawyer = async (req, res) => {
  try {
    const lawyerId = req.query.id;
    const lawyer = await prisma.lawyer.findUnique({
      where: {
        id: lawyerId,
      },
    });
    if (lawyer) {
      return res.status(200).json(lawyer);
    } else {
      return res.status(404).json({ message: "lawyer not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const alllawyers = async (req, res) => {
  try {
    const lawyers = await prisma.lawyer.findMany({});
    console.log();
    if (lawyers) {
      return res.status(200).json(lawyers);
    } else {
      return res.status(404).json({ message: "No lawyers found" });
    }
  } catch (error) {}
};

export const allAppointments = async (req, res) => {
  try {
    if (req.userRole !== "lawyer") {
      return res
        .status(403)
        .json({ message: "Access denied. Patient account required" });
    }
    const lawyertId = req.userId;
    const appointments = await prisma.appointment.findMany({
      where: {
        lawyer_id: lawyertId,
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
    if (req.userRole !== "lawyer") {
      return res
        .status(403)
        .json({ message: "Access denied. lawyer account required" });
    }
    const appointmentId = req.params.id;
    const deleteAppointment = await prisma.appointment.delete({
      where: {
        id: appointmentId,
        lawyer_id: req.userId,
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

export const addAllLawyers = async (req, res) => {
  const lawyers = [
    // Criminal Law
    {
      _id: "law1",
      name: "Adv. Nikhil Sharma",
      image: "/lawyers/nikhil.png",
      speciality: "Criminal Law",
      degree: "LLB, LLM (Criminal Justice)",
      experience: "8 Years",
      about:
        "Advocate Sharma specializes in criminal defense and prosecution, known for his strategic courtroom presence and commitment to justice.",
      fees: 1500,
      address: {
        line1: "15, Park Street",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Successfully handled over 100 criminal cases with a high success rate.",
        "Awarded 'Best Young Criminal Lawyer' by the West Bengal Bar Association (2022).",
      ],
      languages: ["English", "Hindi", "Bengali"],
      professional_memberships: ["Bar Council of India", "Calcutta High Court Bar Association"],
      email: "nikhil.sharma@legalservice.com",
    },
    {
      _id: "law2",
      name: "Adv. Meera Joshi",
      image: "/lawyers/meera.png",
      speciality: "Criminal Law",
      degree: "LLB, Diploma in Forensic Law",
      experience: "6 Years",
      about:
        "Adv. Joshi handles complex criminal cases with a focus on forensic evidence and victim advocacy.",
      fees: 1300,
      address: {
        line1: "7, Elgin Road",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Secured justice in multiple domestic violence and cybercrime cases.",
        "Frequent speaker at legal seminars on forensic law in West Bengal.",
      ],
      languages: ["English", "Bengali", "Hindi"],
      professional_memberships: ["Bar Council of West Bengal", "All India Federation of Women Lawyers"],
      email: "meera.joshi@legalservice.com",
    },
  
    // Civil Litigation
    {
      _id: "law3",
      name: "Adv. Priya Reddy",
      image: "/lawyers/priya.png",
      speciality: "Civil Litigation",
      degree: "LLB, LLM (Civil Procedure)",
      experience: "11 Years",
      about:
        "Adv. Reddy is a seasoned litigator resolving disputes in property, contracts, and torts with a focus on mediation and trial strategy.",
      fees: 1600,
      address: {
        line1: "99, Sarat Bose Road",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Successfully resolved large-scale property disputes through mediation.",
        "Authored a widely-cited paper on the new Civil Procedure Code amendments.",
      ],
      languages: ["English", "Bengali", "Telugu"],
      professional_memberships: ["West Bengal Bar Association", "Indian Council of Arbitration"],
      email: "priya.reddy@legalservice.com",
    },
    {
      _id: "law4",
      name: "Adv. Vikram Rathore",
      image: "/lawyers/vikram.png",
      speciality: "Civil Litigation",
      degree: "LLB, LLM (Dispute Resolution)",
      experience: "13 Years",
      about:
        "Adv. Rathore is known for his expertise in high-stakes civil cases and arbitration proceedings.",
      fees: 1700,
      address: {
        line1: "1, Salt Lake City, Sector 5",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Represented major corporations in multi-million dollar arbitration cases.",
        "Recognized by legal journals for expertise in alternative dispute resolution.",
      ],
      languages: ["English", "Hindi", "Bengali"],
      professional_memberships: ["Bar Council of India", "Kolkata Centre for Arbitration"],
      email: "vikram.rathore@legalservice.com",
    },
  
    // Corporate Law
    {
      _id: "law5",
      name: "Adv. Sanjay Mehta",
      image: "/lawyers/sanjay.png",
      speciality: "Corporate Law",
      degree: "LLB, LLM (Corporate & Financial Law)",
      experience: "14 Years",
      about:
        "Adv. Mehta advises startups and enterprises on mergers, governance, and regulatory compliance.",
      fees: 1800,
      address: {
        line1: "21, Dalhousie Square",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Facilitated successful IPOs for two prominent West Bengal-based tech companies.",
        "Consultant for the Bengal Chamber of Commerce and Industry.",
      ],
      languages: ["English", "Hindi", "Bengali"],
      professional_memberships: ["Bar Council of West Bengal", "Federation of Indian Corporate Lawyers"],
      email: "sanjay.mehta@legalservice.com",
    },
    {
      _id: "law6",
      name: "Adv. Sunita Agarwal",
      image: "/lawyers/sunita.png",
      speciality: "Corporate Law",
      degree: "LLB, CS, LLM (Business Law)",
      experience: "18 Years",
      about:
        "Adv. Agarwal is a corporate law expert with deep experience in IPOs, M&A, and board advisory.",
      fees: 2000,
      address: {
        line1: "42, Greams Road",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Led legal teams in several high-value merger and acquisition deals.",
        "Mentor for aspiring corporate lawyers at the Indian Institute of Corporate Affairs.",
      ],
      languages: ["English", "Hindi", "Bengali"],
      professional_memberships: ["Bar Council of India", "Indian Corporate Counsel Association"],
      email: "sunita.agarwal@legalservice.com",
    },
  
    // Contract Law
    {
      _id: "law7",
      name: "Adv. Aisha Khan",
      image: "/lawyers/aisha.png",
      speciality: "Contract Law",
      degree: "LLB, PGD (Contract Drafting)",
      experience: "6 Years",
      about:
        "Adv. Khan specializes in drafting, reviewing, and negotiating contracts with precision and clarity.",
      fees: 1200,
      address: {
        line1: "11, Sarat Chatterjee Road",
        line2: "Howrah, West Bengal, India",
      },
      achievements: [
        "Provided legal counsel on over 500 commercial contracts for various businesses.",
        "Known for expertise in international contract law and dispute resolution.",
      ],
      languages: ["English", "Bengali", "Urdu"],
      professional_memberships: ["West Bengal Bar Association", "International Bar Association (IBA)"],
      email: "aisha.khan@legalservice.com",
    },
    {
      _id: "law8",
      name: "Adv. Aarav Singh",
      image: "/lawyers/aarav.png",
      speciality: "Contract Law",
      degree: "LLB, LLM (Commercial Law)",
      experience: "9 Years",
      about:
        "Adv. Singh helps businesses and individuals safeguard their interests through robust contract design.",
      fees: 1400,
      address: {
        line1: "C-2, Gariahat Road",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Successfully negotiated key commercial contracts for local and national clients.",
        "Guest lecturer on contract law at a leading law college in West Bengal.",
      ],
      languages: ["English", "Hindi", "Bengali"],
      professional_memberships: ["Bar Council of West Bengal", "Kolkata Lawyers' Guild"],
      email: "aarav.singh@legalservice.com",
    },
  
    // Constitutional Law
    {
      _id: "law9",
      name: "Adv. Rohan Patel",
      image: "/lawyers/rohan.png",
      speciality: "Constitutional Law",
      degree: "LLB, LLM (Constitutional Studies)",
      experience: "10 Years",
      about:
        "Adv. Patel advocates for civil liberties and constitutional rights, with experience in PILs and judicial review.",
      fees: 1700,
      address: {
        line1: "1, Writers' Buildings",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Filed and argued multiple Public Interest Litigations (PILs) for public welfare.",
        "Published articles on judicial review in national law journals.",
      ],
      languages: ["English", "Bengali", "Gujarati"],
      professional_memberships: ["Calcutta High Court Bar Association", "Forum for Constitutional Studies"],
      email: "rohan.patel@legalservice.com",
    },
    {
      _id: "law10",
      name: "Adv. Ishanvi Sharma",
      image: "/lawyers/ishani.png",
      speciality: "Constitutional Law",
      degree: "LLB, LLM (Human Rights Law)",
      experience: "12 Years",
      about:
        "Adv. Sharma is known for her work in constitutional litigation and advocacy for marginalized communities.",
      fees: 1750,
      address: {
        line1: "34, Alipore Road",
        line2: "Kolkata, West Bengal, India",
      },
      achievements: [
        "Secured landmark judgments protecting the rights of marginalized communities.",
        "Awarded a prestigious fellowship for her work in human rights law.",
      ],
      languages: ["English", "Bengali", "Hindi"],
      professional_memberships: ["Bar Council of India", "Human Rights Law Network (HRLN)"],
      email: "ishanvi.sharma@legalservice.com",
    },
  ];
  try {
    // Remove _id field as Prisma expects 'id' or will auto-generate
    const formattedLawyers = lawyers.map(({ _id, ...rest }) => ({ ...rest }));
    const result = await prisma.lawyer.createMany({
      data: formattedLawyers,
      skipDuplicates: true,
    });
    return res
      .status(201)
      .json({ message: "All lawyers added successfully", count: result.count });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to add lawyers", error: error.message });
  }
};
