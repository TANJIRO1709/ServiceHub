  "use server";

import { Client, Account, Databases,Users } from "node-appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = 'http://51.20.103.25:8000/';

interface MLResponse {
  result: string;
}

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json()

    if (typeof input !== 'number') {
      return NextResponse.json({ error: 'Input must be a number' }, { status: 400 });
    }

    // Make a POST request to the ML model API
    const response = await axios.post<MLResponse>(API_URL, { int: input });
    console.log(response.data.result);
    return NextResponse.json({ result: response.data.result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from ML model:', error);
    return NextResponse.json({ error: 'Failed to fetch data from ML model' }, { status: 500 });
  }
}

export async function createSessionClient() {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
  
    const session = cookies().get("appwrite-session");
    if (!session || !session.value) {
      throw new Error("No session");
    }
  
    client.setSession(session.value);
  
    return {
      get account() {
        return new Account(client);
      },
    };
  }

  export async function createAdminClient() {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
      .setKey(process.env.NEXT_APPWRITE_KEY!);
  
    return {
      get account() {
        return new Account(client);
      },
      get database(){
          return new Databases(client)
      },
      get users(){
          return new Users(client)
      }
    };
  }
  