import { jwtDecode, JwtPayload } from "jwt-decode";

export const decodeJWT = <T>(token: string) => {
  try {
    const decoded = jwtDecode<JwtPayload & T>(token);
    return decoded;
  } catch (error) {
    return null;
  }
};
