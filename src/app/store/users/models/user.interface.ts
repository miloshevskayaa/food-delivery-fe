export interface IUserRequest {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  discription: string;
  age: number;
  dateOfBirth: string;
  address: string;
  avatar: IAvatar;
}

export interface IAvatar {
  id: string;
  avatarPath: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
