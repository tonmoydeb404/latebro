import { CookieOptions } from 'express';

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  signed: true,
};
