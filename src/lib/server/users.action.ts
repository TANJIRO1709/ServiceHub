'use server';
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
  
      cookies().delete('appwrite-session');//very important..
  
      await account.deleteSession('current');
    } catch (error) {
      return null;
    }
  }

  export async function signup({password,...userData}:SignUpParams) {
    const {email,firstName,lastName}=userData;
    try {
        const { account } = await createAdminClient();

        const useraccount=await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
      
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        
        return parseStringify(useraccount);//in next js we cant pass large objects just like that through Server actions
    } catch (error) {
        console.error('Error', error);
    }
  }

  export async function signin({email,password}:signInProps) {
    try {
      const { account } = await createAdminClient();
      const users = await account.createEmailPasswordSession(email,password);
      cookies().set("appwrite-session", users.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
      return parseStringify(users);
    } catch (error) {
      console.error('Error', error);
  }
  }