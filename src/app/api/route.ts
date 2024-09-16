import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; origin: any; }; }) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  const { account } = await createAdminClient();
  const session = await account.createSession(userId, secret);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return NextResponse.redirect(`${request.nextUrl.origin}/homepage`);
}