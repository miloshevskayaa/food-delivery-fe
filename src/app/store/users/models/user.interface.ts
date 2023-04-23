export interface IUserRequest {
  id: string;
  userId: number;
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatar: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
