import React, { useState } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-toastify";

const ReviewFrom = ({ username, userId, lawyerId }) => {
  const [rating, setRating] = useState(null);
  const [descriptions, setDescriptions] = useState("");
  const reviewHandler = (e) => {
    e.preventDefault();
    const reviewData = {
      userId,
      lawyerId,
      rating,
      username,
      descriptions,
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/addreview`,
        reviewData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        toast("Review added successfully!");
        setDescriptions("");
        setRating(null);
      });
  };
  return (
    <div className="w-full h-auto items-center bg-amber-50 px-5">
      <form
        className="w-full flex flex-col justify-center"
        onSubmit={reviewHandler}
      >
        <h1 className="py-4 text-xl">Leave a review</h1>
        <h2>
          Hii {username} , I would love to hear your... Please leave your
          valuable feedback...!!
        </h2>
        <br />
        <Label htmlFor="email" className="py-3">
          Share Your feedback
        </Label>
        <RadioGroup
          defaultValue="3"
          onValueChange={(value) => setRating(value)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="1" id="r1" />
            <Label htmlFor="r1">1 - Unprofessional & Rude</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="2" id="r2" />
            <Label htmlFor="r2">2 - Dismissive & Impatient</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="3" id="r3" />
            <Label htmlFor="r3">3 - Neutral & Formal</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="4" id="r4" />
            <Label htmlFor="r4">4 - Courteous & Helpful</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="5" id="r5" />
            <Label htmlFor="r5">5 - Exceptional & Highly Recommended</Label>
          </div>
        </RadioGroup>
        <Label htmlFor="description" className="py-3">
          Your Review
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Share details of your own experience with this lawyer"
          value={descriptions}
          onChange={(e) => setDescriptions(e.target.value)}
          required
        />
        <Button type="submit" className="mt-4">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewFrom;
