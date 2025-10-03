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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCreated = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/signup`,
        {
          name,
          email,
          password,
        }
      );
      const token = await userCreated.data.token;
      const userId = await userCreated.data.userId;
      const userRole = await userCreated.data.role;
      const userName = userCreated.data.name;
      localStorage.setItem("token", token);
      localStorage.setItem("user_role", userRole);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", userName);
      toast.success("User Created Successfully");
      if (token) {
        window.location.href = "/";
        setName("");
        setEmail("");
        setPassword("");
      } else {
        window.location.href = "/signup";
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Signup failed. Please try again.");
      } else if (error.request) {
        toast.error("Cannot connect to server. Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
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
                <h1 className="text-2xl font-bold">Welcome to LawConnect</h1>
                <p className="text-muted-foreground text-balance">
                  Signup into LawConnect account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your username"
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
              <Button variant="secondary" type="submit" className="w-full">
                SignUp
              </Button>

              <div className="text-center text-sm">
                Already a User... {"  "}
                <Link
                  href="/lawyerlogin"
                  prefetch={true}
                  className="underline underline-offset-4"
                >
                  Login
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

export default SignUp;
