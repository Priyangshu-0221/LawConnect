"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "../Components/ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "../Components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";

const AppointmentForm = ({ lawyerId, userId, name, speciality }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [documents, setDocuments] = useState(null);
  const [appointment, setAppointment] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("age", age);
      formData.append("contactNumber", contactNumber);
      formData.append("gender", gender);
      formData.append("documents", documents);
      formData.append("appointment", appointment);
      formData.append("message", message);
      formData.append("name", name);
      formData.append("lawyerId", lawyerId);
      formData.append("userId", userId?.toString());
      formData.append("speciality", speciality);
      formData.append("term", terms.toString());
      setLoader(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new/appointment`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Appointment Booked Successfully");
      setLoader(false);
      setFirstName("");
      setLastName("");
      setAge("");
      setContactNumber("");
      setGender("male");
      setDocuments(null);
      setAppointment(new Date().toISOString().slice(0, 16));
      setMessage("");
      setTerms(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Booking failed");
        console.error("Axios error:", error.response?.data);
      } else {
        toast.error("Unexpected error");
        console.error("General error:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full md:max-w-[70%] sm:w-screen">
        <Card className="overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <form
              className="flex"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="flex w-full flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="sm:flex md:flex-row sm:flex-col md:flex items-center">
                    <Image
                      height={300}
                      width={300}
                      src="/logo.png"
                      alt="logo"
                      className="md:h-20 sm:h-auto md:w-20 sm:w-[25%] mx-2 my-auto rounded-full"
                    />
                    <h1 className="text-5xl font-bold">
                      Book Your Appointment
                    </h1>
                  </div>
                  <p className="text-muted-foreground text-balance underline">
                    &quot;Your satisfaction is our priority. We work tirelessly
                    to ensure our platform is intuitive, efficient, and
                    supportive of your healthcare needs.&quot;
                  </p>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="firstName" className="text-lg">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="lastName" className="text-lg">
                    Last Name<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="phone" className="text-lg">
                    Contact Number<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="age" className="text-lg">
                    Age <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    min="1"
                    required
                  />
                </div>

                <RadioGroup
                  name="gender"
                  value={gender}
                  onValueChange={setGender}
                >
                  <Label htmlFor="gender" className="text-lg">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </div>
                </RadioGroup>

                <div className="grid gap-3">
                  <Label htmlFor="Lawyername" className="text-lg">
                    Lawyer&apos;s Name
                  </Label>
                  <Input
                    id="Lawyername"
                    name="Lawyername"
                    value={name || ""}
                    readOnly
                  />
                  <input type="hidden" name="lawyerId" value={lawyerId} />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="specialty" className="text-lg">
                    Speciality
                  </Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={speciality || ""}
                    readOnly
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="documents" className="text-lg">
                    Legal Documents{" "}
                    <span className="text-red-500">
                      only supported (PDF, JPG, PNG)*
                    </span>
                  </Label>
                  <Input
                    id="documents"
                    type="file"
                    name="documents"
                    accept=".jpg,.png,.pdf"
                    onChange={(e) => setDocuments(e.target.files[0])}
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="appointment" className="text-lg">
                    Appointment Time <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="appointment"
                    type="datetime-local"
                    value={appointment}
                    onChange={(e) => setAppointment(e.target.value)}
                    min={new Date().toISOString().slice(0, 16)}
                    max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .slice(0, 16)}
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="message" className="text-lg">
                    Your Concern <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                  />
                </div>

                <div className="flex items-center gap-2">
                  {terms}
                  <input
                    type="checkbox"
                    id="terms"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    required
                  />
                  <Label htmlFor="terms">
                    I agree to the{" "}
                    <Link href="#" className="underline">
                      terms & conditions
                    </Link>
                  </Label>
                </div>

                <Button
                  variant="secondary"
                  type="submit"
                  className="w-full"
                  disabled={loader}
                >
                  {loader ? "Booking..." : "Book Appointment"}
                </Button>

                <div className="text-center text-sm">
                  <p>
                    &quot;Good service is our top priority. We strive to provide
                    exceptional care and seamless booking experiences for our
                    users.&quot;
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentForm;
