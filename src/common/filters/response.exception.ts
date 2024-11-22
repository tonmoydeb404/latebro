import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiErrorResponse } from '../interfaces/response.interface';

@Catch()
export class ResponseExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse: ApiErrorResponse = {
      status: 'error',
      code: status,
      message:
        exception instanceof HttpException
          ? (exception.getResponse() as any).message || exception.message
          : 'Internal server error',
      error: {
        type: exception.name || 'InternalServerError',
        details:
          exception instanceof HttpException &&
          (exception.getResponse() as any).details
            ? (exception.getResponse() as any).details
            : [],
      },
    };

    response.status(status).json(errorResponse);
  }
}
