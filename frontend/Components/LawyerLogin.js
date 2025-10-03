"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";

const LawyerLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginLawyer = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/login`,
        {
          email,
          password,
        }
      );
      const lawyer_token = await loginLawyer.data.token;
      const lawyer_role = await loginLawyer.data.lawyer_role;
      const lawyerId = await loginLawyer.data.lawyerId;
      localStorage.setItem("lawyer_token", lawyer_token);
      localStorage.setItem("lawyer_role", lawyer_role);
      localStorage.setItem("lawyerId", lawyerId);
      if (lawyer_token) {
        toast.success("Login Successful");
        window.location.href = `/lawyer/${loginLawyer.data.lawyerId}`;
        setemail("");
        setpassword("");
      } else {
        window.location.href = "/lawyerlogin";
      }
    } catch (error) {
      console.error("Lawyer login error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Login failed. Please check your credentials.");
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
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome Back Lawyer</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your LawConnect account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
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
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <Button variant="secondary" type="submit" className="w-full">
                Login
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/lawyersignup"
                  prefetch={true}
                  className="underline underline-offset-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              height={300}
              width={300}
              src="/login.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-fit dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default LawyerLogin;
