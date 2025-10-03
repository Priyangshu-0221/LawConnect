import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import VerifiedIcon from "@mui/icons-material/Verified";
import axios from "axios";

const ReviewComponent = () => {
  const params = useParams();
  const lawyerId = params.lawyer;
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!lawyerId) {
      setIsLoading(false);
      return;
    }
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/getreviews?lawyerId=${lawyerId}`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [lawyerId]);

  if (isLoading) {
    return <p className="text-center p-4">Loading reviews...</p>;
  }

  return (
    <div>
      <div className="mt-2">
        <div className="py-2">
          <h1 className="text-3xl text-center">All Reviews</h1>
        </div>
        {reviews.length === 0 ? (
          <div className="w-full text-center my-3">
            <h1>No reviews yet</h1>
          </div>
        ) : (
          <div>
            {reviews.map((review) => {
              return (
                <div key={review.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {review.username}
                        <VerifiedIcon />
                      </CardTitle>
                      <CardDescription>{review.rating} Star</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{review.descriptions}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;
