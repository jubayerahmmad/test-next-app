"use client";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const session = useSession();
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
};

export default UserInfo;
