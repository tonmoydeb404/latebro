import { Params } from 'nestjs-pino';

export const pinoConfig: Params = {
  pinoHttp: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        messageFormat:
          '{req.method} {req.url} - {req.statusCode} - {responseTime}ms\n',
        hideObject: true,
      },
    },
    level: 'info',
  },
};
