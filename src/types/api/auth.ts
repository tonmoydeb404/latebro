import { ApiResponse } from ".";
import { User } from "../user";

export type AuthPaylod = {
  _id: string;
  email: string;
};

// ----------------------------------------------------------------------

export type LoginBody = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse<{
  user: User;
  payload: AuthPaylod;
  token: string;
}>;

// ----------------------------------------------------------------------

export type RegisterBody = {
  email: string;
  password: string;
};

export type RegisterResponse = ApiResponse<{
  user: User;
  payload: AuthPaylod;
  token: string;
}>;
