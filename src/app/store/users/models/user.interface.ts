export interface IUser {
  id: string;
  userId: number;
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatar: string;
}

export interface IUserResponse {
  user: IUser | null;
  token: string;
}
