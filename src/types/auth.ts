import { User } from "./user";

export interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// ----------------------------------------------------------------------

export type AuthLogin = {
  token: string;
  user: User;
};
