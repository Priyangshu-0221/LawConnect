import jwt from "jsonwebtoken";

const lawyerAuth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Lawyer Authenticated:", decoded);
    req.lawyer_id = decoded.id;
    req.lawyer_role = decoded.role;     
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default lawyerAuth;