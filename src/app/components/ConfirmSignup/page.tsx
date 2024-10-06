"use client";

import { lusitana } from "@/app/components/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/components/button";
import { useFormState, useFormStatus } from "react-dom";
import { handleConfirmSignUp } from "@/lib/cognitoActions";
import SendVerificationCode from "@/app/components/Verification/page";

export default function ConfirmSignUpForm() {
  const [errorMessage, dispatch] = useFormState(handleConfirmSignUp, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        action={dispatch}
        className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-lg"
      >
        <h1
          className={`${lusitana.className} text-2xl sm:text-3xl font-bold text-center text-gray-800`}
        >
          Confirm Your Account
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email and the confirmation code sent to verify your account.
        </p>
        <div className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-300 py-2 px-10 text-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400 text-black"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 peer-focus:text-indigo-500 transform -translate-y-1/2" />
          </div>

          {/* Confirmation Code Input */}
          <div className="relative">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="code"
            >
              Confirmation Code
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-300 py-2 px-10 text-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400 text-black"
              id="code"
              type="text"
              name="code"
              placeholder="Enter the code"
              required
              minLength={6}
            />
            <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 peer-focus:text-indigo-500 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Confirm Button */}
        <ConfirmButton />

        {/* Error Message */}
        {errorMessage && (
          <div className="flex items-center space-x-2 text-red-600 text-sm mt-4">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Resend Verification Code */}
        <div className="text-center mt-4">
          <SendVerificationCode />
        </div>
      </form>
    </div>
  );
}

function ConfirmButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`w-full py-2 rounded-md text-white font-medium transition-all ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
      aria-disabled={pending}
    >
      Confirm Account <ArrowRightIcon className="ml-2 h-5 w-5" />
    </Button>
  );
}
