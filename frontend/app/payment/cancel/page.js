"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function PaymentCancel() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="w-24 h-24 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. Don&apos;t worry, you haven&apos;t been charged. You can try again whenever you&apos;re ready.
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            💡 <strong>Tip:</strong> Make sure you have a valid payment method ready before proceeding to checkout.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => router.push("/myappointment/appointment")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Appointments
          </Button>
          
          <Button 
            onClick={() => router.push("/")}
            variant="outline"
            className="w-full"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
