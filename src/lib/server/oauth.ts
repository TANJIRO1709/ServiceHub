"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGoogle() {
    console.log("Google");
	const { account } = await createAdminClient();

    const origin = headers().get("origin");
  
	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Google,
		`${origin}/api/oauth`,
		`${origin}/signup`,
	);

	return redirect(redirectUrl);
};