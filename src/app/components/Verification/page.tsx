"use client";

import {
  ArrowRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import { handleSendEmailVerificationCode } from "@/lib/cognitoActions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../button";

export default function SendVerificationCode() {
  const [response, dispatch] = useFormState(handleSendEmailVerificationCode, {
    message: "",
    errorMessage: "",
  });
  const { pending } = useFormStatus();

  return (
    <div className="w-full max-w-sm mx-auto mt-8 space-y-4">
      <Button
        className={`mt-4 w-full py-3 text-white rounded-lg shadow-md transition-all ${
          pending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
        aria-disabled={pending}
        formAction={dispatch}
      >
        Resend Verification Code
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      <div className="h-8 flex items-center justify-center space-x-2">
        {response?.errorMessage && (
          <div className="flex items-center text-red-500">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p className="ml-2 text-sm">{response.errorMessage}</p>
          </div>
        )}
        {response?.message && (
          <p className="text-sm text-green-500">{response.message}</p>
        )}
      </div>
    </div>
  );
}
