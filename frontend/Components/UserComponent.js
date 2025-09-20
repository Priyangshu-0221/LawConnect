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

const UserComponent = () => {
  const [editOption, seteditOption] = useState(false);
  console.log(editOption);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userProfile = async () => {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("user_role");
      try {
        if (userRole === "patient") {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(res.data);
          setUser(res.data); // save response data to state
          setPhone(res.data.phone || " ");
          setAddress(res.data.address || " ");
          setGender(res.data.gender || " ");
          console.log("user data");
        } else {
          return;
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    userProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsUpdating(true);
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/profile/update`,
        {
          phone,
          address,
          gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully");
      setUser(res.data); // optional, depends on response format
      seteditOption(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
      seteditOption(false);
    }
  };

  return (
    <>
      {editOption ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
          <Card className="shadow-md">
            <CardHeader className="flex flex-col items-center gap-2">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/user.png" alt="Profile" />
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
                    <Label htmlFor="email">Email ID</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email || ""}
                      readOnly
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0000000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Not Selected"
                      name="address"
                      required
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="text-md font-semibold text-muted-foreground mb-2">
                  Basic Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      placeholder="Not Selected"
                      name="gender"
                      required
                    />
                  </div>
                </div>
              </section>
            </CardContent>
            <CardFooter className="flex mt-5 justify-center gap-5">
              <Button variant="default" type="submit">
                Update
              </Button>
              <Button
                onClick={() => {
                  seteditOption(!editOption);
                }}
                variant="destructive"
                type="button"
              >
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </form>
      ) : (
        <Card className="max-w-lg mx-auto my-6 shadow-md">
          <CardHeader className="flex flex-col items-center gap-2">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/user.png" alt="Profile" />
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
                    name="email"
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    value={user.phone || "Not provided"}
                    readOnly
                    name="phone"
                  />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input
                    type="text"
                    value={user.address || "Not provided"}
                    placeholder="Not Selected"
                    readOnly
                    name="address"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-md font-semibold text-muted-foreground mb-2">
                Basic Information
              </h3>
              <div className="space-y-3">
                <div>
                  <Label>Gender</Label>
                  <Input
                    type="text"
                    value={user.gender || "Not provided"}
                    readOnly
                    name="gender"
                  />
                </div>
              </div>
            </section>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              onClick={() => seteditOption(!editOption)}
              variant="default"
            >
              Edit
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default UserComponent;
