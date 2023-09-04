import UserClient from "@/api/UserApi";
import Image from "next/image";
import React from "react";

const userClient = new UserClient();

export default async function UserPage() {
  const { photoUrl, name, email, company } = await userClient.getMyUser();

  return (
    <div className="flex flex-col items-center gap-2 py-10">
      <Image
        className="rounded-full shadow-xl"
        src={photoUrl}
        alt={name}
        width={150}
        height={150}
      />
      <h1>
        <span className="text-xl font-bold">Name: </span>
        {name}
      </h1>
      <p>
        <span className="text-xl font-bold">Email: </span>
        {email}
      </p>
      <p>
        <span className="text-xl font-bold">Company: </span>
        {company.name}
      </p>
    </div>
  );
}
