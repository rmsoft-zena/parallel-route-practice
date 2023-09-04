import { User } from "@/type/userType";

export default class UserClient {
  private httpClient;
  private photoUrl;
  constructor() {
    this.httpClient = "https://jsonplaceholder.typicode.com/users";
    this.photoUrl = "https://robohash.org";
  }

  public async getMyUser(): Promise<User> {
    const data = await fetch(`${this.httpClient}/1`).then((res) => res.json());
    const photoUrl = `${this.photoUrl}/1`;
    return { ...data, photoUrl };
  }

  public async getUsers(): Promise<User[]> {
    const data = await fetch(this.httpClient).then((res) => res.json());
    const users = data.map((user: User) => ({
      ...user,
      photoUrl: `${this.photoUrl}/${user.id}`,
    }));
    return users;
  }
}
