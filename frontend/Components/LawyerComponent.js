"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { toast } from "react-toastify";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import Link from "next/link";

const LawyerComponent = () => {
  const [editOption, setEditOption] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lawyer, setlawyer] = useState({});
  const [name, setName] = useState("");
  const [speciality, setspeciality] = useState("");
  const [degree, setdegree] = useState("");
  const [about, setabout] = useState("");
  const [experience, setexperience] = useState("");
  const [image, setimage] = useState("lawyer.jpg");
  const [uploading, setUploading] = useState(false);
  const [fees, setfees] = useState(500);
  const [address, setaddress] = useState({ street: "", city: "", state: "" });
  const [achievements, setachievements] = useState([]);
  const [languages, setlanguages] = useState([]);
  const [professionalMemberships, setprofessionalMemberships] = useState([]);
  const lawyerId = lawyer.id;


  useEffect(() => {
    const fetchlawyerProfile = async () => {
      const lawyerToken = localStorage.getItem("lawyer_token");
      const lawyerRole = localStorage.getItem("lawyer_role");
      if (lawyerToken && lawyerRole === "lawyer") {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/lawyerprofile`,
            {
              headers: {
                Authorization: `Bearer ${lawyerToken}`,
              },
            }
          );
          setlawyer(res.data);
          setName(res.data.name || "");
          setspeciality(res.data.speciality || "");
          setfees(res.data.fees != null ? res.data.fees : 500);
          setexperience(res.data.experience || "");
          setdegree(res.data.degree || "");
          setabout(res.data.about || "");
          setaddress(res.data.address || { street: "", city: "", state: "" });
          setimage(res.data.image || "lawyer.jpg");
          setachievements(res.data.achievements || []);
          setlanguages(res.data.languages || []);
          setprofessionalMemberships(res.data.professional_memberships || []);
        } catch (error) {
          console.error("Profile fetch error:", error);
          toast.error(
            error.response?.data?.message || "Failed to fetch profile"
          );
        }
      } else {
        return;
      }
    };
    fetchlawyerProfile();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const lawyerToken = localStorage.getItem("lawyer_token");
    setIsUpdating(true);
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/update`,
        {
          name,
          speciality,
          fees: parseInt(fees),
          experience,
          degree,
          about,
          address,
          achievements,
          languages,
          professional_memberships: professionalMemberships,
        },
        {
          headers: {
            Authorization: `Bearer ${lawyerToken}`,
          },
        }
      );
      toast.success("Profile updated successfully");
      setlawyer(res.data);
      setEditOption(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const lawyerToken = localStorage.getItem("lawyer_token");
    const formData = new FormData();
    formData.append("avatarimage", file);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/avatar`,
        formData,
        {
          headers:
          {
            Authorization: `Bearer ${lawyerToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setimage(res.data.imageUrl);
      setlawyer((prev) => ({ ...prev, image: res.data.imageUrl }));
      toast.success("Profile picture updated!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Render edit form
  const renderEditForm = () => (
    
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col items-center gap-2">
          <Avatar className="w-20 h-20">
            <AvatarImage src={image || "lawyer.jpg"} alt="Profile" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
            disabled={uploading}
          />
          {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
          <h2 className="text-xl font-semibold tracking-tight">
            {name || "lawyer"}
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h3 className="text-md font-semibold text-muted-foreground mb-2">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <Label>Email ID</Label>
                <Input type="email" value={lawyer.email || ""} readOnly />
              </div>
              <div>
                <Label>Speciality</Label>
                <RadioGroup
                  value={speciality}
                  onValueChange={setspeciality}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Criminal Law" id="spec1" />
                    <Label htmlFor="spec1">Criminal Law</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Civil Litigation" id="spec2" />
                    <Label htmlFor="spec2">Civil Litigation</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Corporate Law" id="spec3" />
                    <Label htmlFor="spec3">Corporate Law</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Constitutional Law" id="spec4" />
                    <Label htmlFor="spec4">Constitutional Law</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Contract Law" id="spec5" />
                    <Label htmlFor="spec5">Contract Law</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>Fees</Label>
                <Input
                  type="text"
                  value={fees || ""}
                  onChange={(e) => setfees(e.target.value)}
                />
              </div>
              <div>
                <Label>Experience</Label>
                <Input
                  type="text"
                  value={experience || ""}
                  onChange={(e) => setexperience(e.target.value)}
                />
              </div>
              <div>
                <Label>Degree</Label>
                <Input
                  type="text"
                  value={degree || ""}
                  onChange={(e) => setdegree(e.target.value)}
                />
              </div>
              <div>
                <Label>About</Label>
                <Input
                  type="text"
                  value={about || ""}
                  onChange={(e) => setabout(e.target.value)}
                />
              </div>
              <div>
                <Label>Address</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Street"
                    value={address.street || ""}
                    onChange={e => setaddress({ ...address, street: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="City"
                    value={address.city || ""}
                    onChange={e => setaddress({ ...address, city: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="State"
                    value={address.state || ""}
                    onChange={e => setaddress({ ...address, state: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label>Achievements (comma separated)</Label>
                <Input
                  type="text"
                  value={achievements.join(", ")}
                  onChange={e => setachievements(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                />
              </div>
              <div>
                <Label>Languages (comma separated)</Label>
                <Input
                  type="text"
                  value={languages.join(", ")}
                  onChange={e => setlanguages(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                />
              </div>
              <div>
                <Label>Professional Memberships (comma separated)</Label>
                <Input
                  type="text"
                  value={professionalMemberships.join(", ")}
                  onChange={e => setprofessionalMemberships(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
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
          <AvatarImage src={lawyer.image || image || "lawyer.jpg"} alt="Profile" />
          <AvatarFallback />
        </Avatar>
        <h2 className="text-xl font-semibold tracking-tight">
          {lawyer.name || "lawyer"}
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
              <Input type="email" value={lawyer.email || ""} readOnly />
            </div>

            <div>
              <Label>Rating</Label>
              <RadioGroup
                defaultValue="3"
                onValueChange={(value) => setspeciality(value)}
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
            </div>

            <div>
              <Label>Fees</Label>
              <Input type="text" value={lawyer.fees != null ? lawyer.fees : ""} readOnly />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type="text"
                value={lawyer.experience ? `${lawyer.experience} years` : ""}
                readOnly
              />
            </div>
            <div>
              <Label>Degree</Label>
              <Input type="text" value={lawyer.degree || ""} readOnly />
            </div>
            <div>
              <Label>About</Label>
              <Input type="text" value={lawyer.about || ""} readOnly />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                type="text"
                value={
                  lawyer.address
                    ? `${lawyer.address.street || ""}, ${lawyer.address.city || ""}, ${lawyer.address.state || ""}`
                    : ""
                }
                readOnly
              />
            </div>
            <div>
              <Label>Achievements</Label>
              <Input
                type="text"
                value={
                  lawyer.achievements?.length
                    ? lawyer.achievements.join(", ")
                    : ""
                }
                readOnly
              />
            </div>
            <div>
              <Label>Languages</Label>
              <Input
                type="text"
                value={
                  lawyer.languages?.length ? lawyer.languages.join(", ") : ""
                }
                readOnly
              />
            </div>
            <div>
              <Label>Professional Memberships</Label>
              <Input
                type="text"
                value={
                  lawyer.professional_memberships?.length
                    ? lawyer.professional_memberships.join(", ")
                    : ""
                }
                readOnly
              />
            </div>
          </div>
        </section>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Link href={`/lawyer_appointment/${lawyerId}`}>
          <Button onClick={() => { }} variant="default">
            Check my Appointments
          </Button>
        </Link>
        <Button onClick={() => setEditOption(true)} variant="default">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );

  return editOption ? renderEditForm() : renderProfileView();
};

export default LawyerComponent;
