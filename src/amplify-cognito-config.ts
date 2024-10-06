"use client";

import { Amplify , type ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig["Auth"] = {
  Cognito: { // Ensure the region is set if needed
  userPoolId: String(process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID), 
  userPoolClientId: String(process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID),
},

};

Amplify.configure(
  {Auth: authConfig,},
  {ssr: true} // SSR is a global config, not part of Auth
);

export default function ConfigureAmplifyClientSide() {
  return null;
}
