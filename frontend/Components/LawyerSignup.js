"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const LawyerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const lawyerCreated = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/signup`,
        {
          name,
          email,
          password,
        }
      );
      if (lawyerCreated && lawyerCreated.data) {
        const lawyer_token = lawyerCreated.data.token;
        const lawyer_role = lawyerCreated.data.lawyer_role;
        localStorage.setItem("lawyer_token", lawyer_token);
        localStorage.setItem("lawyer_role", lawyer_role);
        toast.success("Welcome to LawConnect Lawyer!");
        window.location.href = "/lawyerlogin";
        toast.message("Please Login to proceed with your lawyer account.");
        if (lawyer_token) {
          setName("");
          setEmail("");
          setPassword("");
        } else {
          window.location.href = "/lawyersignup";
        }
      } else {
        toast.error("Signup failed: No response data");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="bg-muted relative hidden md:block">
            <Image
              height={300}
              width={300}
              src="/signup.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-fit dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  Welcome to LawConnect Lawyer
                </h1>
                <p className="text-muted-foreground text-balance">
                  LawyerSignup into LawConnect account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Please enter your FullName</Label>
                <Input
                  id="lawyername"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your lawyername"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button  type="submit" className="w-full">
                Lawyer Signup
              </Button>

              <div className="text-center text-sm">
                Already a registered Lawyer....? {"  "}
                <Link
                  href="/lawyerlogin"
                  prefetch={true}
                  className="underline underline-offset-4"
                >
                  Please Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default LawyerSignup;
