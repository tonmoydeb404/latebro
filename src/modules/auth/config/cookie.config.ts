import { getDomain } from '@/common/utills/request';
import { CookieOptions, Request } from 'express';

export const getCookieConfig = (req: Request): CookieOptions => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : undefined,
    domain: getDomain(req),
  };
};
