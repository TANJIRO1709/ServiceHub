// aws-exports.js
const awsConfig = {
  Auth: {
    region: "NEXT_PUBLIC_AWS_COGNITO_REGION", // e.g., "us-east-1"
    userPoolId: "NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID",
    userPoolWebClientId: "NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID",
  }
};

export default awsConfig;
