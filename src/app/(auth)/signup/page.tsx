import SignupFormDemo from '@/app/components/signup'
import { getLoggedInUser } from '@/lib/server/users.action';
import { redirect } from 'next/navigation';
import React from 'react'

const SignupPage = async () => {
  const user = await getLoggedInUser();
  //console.log(user);
  if (user) redirect("/homepage")
  return (
    <>
    <SignupFormDemo/>
    </>
  )
}

export default SignupPage