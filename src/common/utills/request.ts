import { Request } from 'express';

export const getDomain = (host: string) => {
  const [domain, _] = host.split(':');
  // Check if the host is a subdomain (e.g., api.example.com)
  const parts = domain.split('.');
  if (parts.length > 2) {
    // Return the top-level domain (e.g., example.com)
    return parts.slice(-2).join('.');
  }
  // Return the host as-is for single-level domains
  return domain;
};

export const getRequestDomain = (req: Request) => {
  const origin = req.headers.origin;

  if (!origin) return undefined;

  return getDomain(new URL(origin).hostname);
};
