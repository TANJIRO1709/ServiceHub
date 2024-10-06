// Import necessary packages
import { createServerRunner } from "@aws-amplify/adapter-nextjs"; // Adjust this import as needed
import { authConfig } from "@/amplify-cognito-config"; // Ensure this path is correct

// Create server runner with Amplify context
export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: authConfig, // Correct reference to authConfig
  },
});
