"use client";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import React from "react";

export default function DetailPage() {
  const { user } = useUserStore();

  return (
    <div className="flex justify-center py-16">
      {user ? (
        <div className="flex flex-col items-center gap-3">
          <Image
            className="rounded-full"
            src={user.photoUrl}
            alt={user.name}
            width={100}
            height={100}
          />
          <h2>
            <span className="text-xl font-bold">Name: </span>
            {user.name}
          </h2>
          <p>
            <span className="text-xl font-bold">Email: </span>
            {user.email}
          </p>
          <p>
            <span className="text-xl font-bold">Phone: </span>
            {user.phone}
          </p>
          <p>
            <span className="text-xl font-bold">Website: </span>
            {user.website}
          </p>
          <p>
            <span className="text-xl font-bold">company: </span>
            {user.company.name}
          </p>
        </div>
      ) : (
        <h1 className="text-3xl font-bold py-52">Click your Mate!</h1>
      )}
    </div>
  );
}
