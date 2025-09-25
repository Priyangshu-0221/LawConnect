import prisma from "../DATABASE/db.config.js";

export const addReview = async (req, res) => {
  try {
    if (req.userRole !== "client") {
      return res
        .status(403)
        .json({ message: "Access denied. client account required" });
    }
    const { lawyerId, rating, username, descriptions } = req.body;
    const clientId = req.userId;
    const newReview = await prisma.review.create({
      data: {
        username,
        rating,
        descriptions,
        lawyer: {
          connect: {
            id: lawyerId,
          },
        },
        client: {
          connect: {
            id: clientId,
          },
        },
      },
      include: { lawyer: true, client: true },
    });
    if (!newReview) {
      return res.status(404).json({ message: "Review not added" });
    }
    return res.status(200).json({ message: "Review added successfully" });
  } catch (error) {
    console.error("Error adding review:", error); // It's good practice to log the error
    return res.status(500).json({ message: error.message });
  }
};

export const allReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        lawyer_id: req.query.lawyerId,
      },
    });
    if (!reviews) {
      return res.status(404).json({ message: "No reviews found" });
    }
    return res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error); // It's good practice to log the error
    return res.status(500).json({ message: error.message });
  }
};
