import { User, UserAction, UserState } from "@/type/userType";
import { create } from "zustand";

export const useUserStore = create<UserState & UserAction>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user: user })),
}));
