import UserClient from "@/api/UserApi";
import React from "react";
import UserCard from "../components/UserCard";

const userClient = new UserClient();

export default async function TeamPage() {
  const users = await userClient.getUsers();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center text-2xl font-bold">My Team</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
