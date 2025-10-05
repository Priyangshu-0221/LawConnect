"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/Components/ui/button";
import axios from "axios";
import { toast } from "react-toastify";

// Component that uses useSearchParams
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [isUpdating, setIsUpdating] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const updatePaymentStatus = async () => {
      if (!sessionId) {
        setIsUpdating(false);
        return;
      }

      try {
        const token = localStorage.getItem("token");
        const appointmentId = localStorage.getItem("pendingPaymentAppointmentId");
        
        if (!appointmentId) {
          console.error("No appointment ID found");
          setIsUpdating(false);
          return;
        }

        // Call backend to update isPaid status
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new/payment-success`,
          { appointmentId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setPaymentDetails(response.data.appointment);
          toast.success("Payment verified successfully!");
          // Clear the stored appointment ID
          localStorage.removeItem("pendingPaymentAppointmentId");
        }
      } catch (error) {
        console.error("Error updating payment status:", error);
        toast.error("Payment was successful but status update failed. Please contact support.");
      } finally {
        setIsUpdating(false);
      }
    };

    updatePaymentStatus();
  }, [sessionId]);

  if (isUpdating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-24 h-24 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Successful! 🎉
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your appointment payment has been processed successfully
        </p>
        
        {sessionId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="text-xs text-gray-700 font-mono break-all mt-1">
              {sessionId}
            </p>
          </div>
        )}

        {paymentDetails && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              ✓ Payment status updated for appointment with <strong>{paymentDetails.lawyer_name}</strong>
            </p>
          </div>
        )}
        
        <div className="space-y-3">        
         
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

// Main component with Suspense boundary
export default function PaymentSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-center">
            <Loader2 className="w-16 h-16 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
