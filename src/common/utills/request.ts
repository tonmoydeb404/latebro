import { Request } from 'express';

export const getDomain = (req: Request) => {
  const host = req.headers.host;

  if (host.split(':')[0] === 'localhost') return undefined;

  return req.headers.host;
};
