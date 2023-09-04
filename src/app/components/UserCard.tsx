"use client";
import { useUserStore } from "@/store/userStore";
import { User } from "@/type/userType";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const { name, email, company, photoUrl } = user;
  const { setUser } = useUserStore();
  return (
    <button onClick={() => setUser(user)} className="flex gap-5">
      <Image
        className="rounded-full"
        src={photoUrl}
        alt={name}
        width={50}
        height={50}
      />
      <div>
        <h2>
          <span className="text-lg text-indigo-400 font-semibold">name: </span>
          {name}
        </h2>
        <p>
          <span className="text-lg text-indigo-400 font-semibold">email: </span>
          {email}
        </p>
        <p>
          <span className="text-lg text-indigo-400 font-semibold">
            company:{" "}
          </span>
          {company.name}
        </p>
      </div>
    </button>
  );
}
