import SignupFormDemo from '@/app/components/signin'
import { getLoggedInUser } from '@/lib/server/users.action';
import { redirect } from 'next/navigation';
import React from 'react'

const SignIn = async () => {
  const user = await getLoggedInUser();
  //console.log(user);
  if (user) redirect("/homepage")
  return (
    <>
      <SignupFormDemo/>
    </>
  )
}

export default SignIn