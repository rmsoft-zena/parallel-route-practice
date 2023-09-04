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
          <h2>name: {user.name}</h2>
          <p>email: {user.email}</p>
          <p>phone: {user.phone}</p>
          <p>website: {user.website}</p>
          <p>company: {user.company.name}</p>
        </div>
      ) : (
        <h1 className="text-3xl font-bold py-52">Click your Mate!</h1>
      )}
    </div>
  );
}
