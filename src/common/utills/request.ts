import { Request } from 'express';

export const getDomain = (req: Request) => {
  const origin = req.headers.origin;

  if (!origin) return undefined;

  return new URL(origin).hostname;
};
