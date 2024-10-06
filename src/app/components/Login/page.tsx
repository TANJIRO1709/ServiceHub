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
import { handleSignIn } from "@/lib/cognitoActions";
import Link from "next/link";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(handleSignIn, undefined);
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        action={dispatch}
        className="w-full max-w-md space-y-3 rounded-lg bg-gray-50 px-6 pb-4 pt-8 shadow-lg"
      >
        <h1
          className={`${lusitana.className} mb-3 text-center text-2xl sm:text-3xl font-semibold text-gray-900`}
        >
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-2 block text-xs font-medium text-gray-900 sm:text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm sm:text-base outline-2 transition-all focus:ring focus:ring-indigo-500 placeholder:text-gray-500 text-black"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-xs font-medium text-gray-900 sm:text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm sm:text-base outline-2 transition-all focus:ring focus:ring-indigo-500 placeholder:text-gray-500 text-black"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-indigo-600" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex justify-center">
          <Link
            href="/components/Sign"
            className="mt-2 cursor-pointer text-blue-500 hover:underline"
          >
            {"Don't have an account? "} Sign up.
          </Link>
        </div>
        <div className="flex h-8 items-end space-x-1">
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`mt-4 w-full py-2 text-white transition-all ${
        pending ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
      }`}
      aria-disabled={pending}
    >
      Log in
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
