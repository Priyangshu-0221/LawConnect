"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "react-toastify";

const DoctorComponent = () => {
  const [editOption, setEditOption] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [user, setUser] = useState([]);
  const [speciality, setspeciality] = useState("Not provided");
  const [fees, setfees] = useState("Not provided");
  const [experience, setexperience] = useState("Not provided");
  const [degree, setdegree] = useState("Not provided");
  const [about, setabout] = useState("Not provided");
  const [address, setaddress] = useState("Not provided");

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("user_role");
      if (token && userRole === "doctor") {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/doctor/doctorprofile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setUser(res.data);
          setspeciality(res.data.speciality);
          setfees(res.data.fees);
          setexperience(res.data.experience);
          setdegree(res.data.degree);
          setabout(res.data.about);
          setaddress(res.data.address);
          console.log(res.data);
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Failed to fetch profile"
          );
        }
      } else {
        return;
      }
    };
    fetchDoctorProfile();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsUpdating(true);
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/doctor/update`,
        {
          speciality,
          fees: parseInt(fees),
          experience,
          degree,
          about,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully");
      setUser(res.data);
      setEditOption(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  // Render edit form
  const renderEditForm = () => (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col items-center gap-2">
          <Avatar className="w-20 h-20">
            <AvatarImage src="user.png" alt="Profile" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold tracking-tight">
            {user.name || "User"}
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h3 className="text-md font-semibold text-muted-foreground mb-2">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <Label>Email ID</Label>
                <Input type="email" value={user.email} readOnly />
              </div>
              <div>
                <Label>Speciality</Label>
                <Input
                  type="text"
                  value={speciality}
                  onChange={(e) => setspeciality(e.target.value)}
                />
              </div>
              <div>
                <Label>Fees</Label>
                <Input
                  type="text"
                  value={fees}
                  onChange={(e) => setfees(e.target.value)}
                />
              </div>
              <div>
                <Label>Experience</Label>
                <Input
                  type="text"
                  value={experience}
                  onChange={(e) => setexperience(e.target.value)}
                />
              </div>
              <div>
                <Label>Degree</Label>
                <Input
                  type="text"
                  value={degree}
                  onChange={(e) => setdegree(e.target.value)}
                />
              </div>
              <div>
                <Label>About</Label>
                <Input
                  type="text"
                  value={about}
                  onChange={(e) => setabout(e.target.value)}
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
            </div>
          </section>
        </CardContent>

        <CardFooter className="flex mt-5 justify-center gap-5">
          <Button variant="default" type="submit" disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update"}
          </Button>
          <Button
            onClick={() => setEditOption(false)}
            variant="destructive"
            type="button"
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </form>
  );

  // Render profile view
  const renderProfileView = () => (
    <Card className="max-w-lg mx-auto mt-6 shadow-md">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="w-20 h-20">
          <AvatarImage src="user.png" alt="Profile" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold tracking-tight">
          {user.name || "User"}
        </h2>
      </CardHeader>

      <CardContent className="space-y-4">
        <section>
          <h3 className="text-md font-semibold text-muted-foreground mb-2">
            Contact Information
          </h3>
          <div className="space-y-3">
            <div>
              <Label>Email ID</Label>
              <Input
                type="email"
                value={user.email || "Not provided"}
                readOnly
              />
            </div>
            <div>
              <Label>Speciality</Label>
              <Input
                type="text"
                value={user.speciality || "Not provided"}
                readOnly
              />
            </div>
            <div>
              <Label>Fees</Label>
              <Input type="text" value={user.fees || "Not provided"} readOnly />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type="text"
                value={
                  user.experience ? `${user.experience} years` : "Not provided"
                }
                readOnly
              />
            </div>
            <div>
              <Label>Degree</Label>
              <Input
                type="text"
                value={user.degree || "Not provided"}
                readOnly
              />
            </div>
            <div>
              <Label>About</Label>
              <Input
                type="text"
                value={user.about || "Not provided"}
                readOnly
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                type="text"
                value={user.address || "Not provided"}
                readOnly
              />
            </div>
          </div>
        </section>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={() => {}} variant="default">
          Check my schedule
        </Button>
        <Button onClick={() => setEditOption(true)} variant="default">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );

  return editOption ? renderEditForm() : renderProfileView();
};

export default DoctorComponent;
