import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {

    /*
      Here is an example how to create an interceptor.

      It can be used, for example, to log the application or create something you want to run
      in every single route or an specific route using @UseInterceptors annotation.

      In this sample, it was configured in the app.module.ts for entire application, but you can
      use it for each context according with your implementation.

    */

    const request: Request = context.switchToHttp().getRequest();

    if (request.originalUrl !== '/health') {
      const date = new Date();
      if (['dev', 'development', 'local'].indexOf(process.env.NODE_ENV)) {
        Logger.log(`${date.toISOString()} Request: ${request.originalUrl}`);
        Logger.log(`${date.toISOString()} Request Body: ${ request.body}`);
      }
      return next
      .handle()
      .pipe(
        tap(() => {
          Logger.log(`${date.toISOString()} Response...`);
        }),
      );
    }

    return next.handle();
  }
}
