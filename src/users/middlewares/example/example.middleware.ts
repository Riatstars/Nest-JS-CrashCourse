import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example middlewares');
    let { authorization } = req.headers;
    // let authorization = '123';
    if (!authorization)
      throw new HttpException('no token found', HttpStatus.FORBIDDEN);

    if (authorization !== '123')
      throw new HttpException('non authorized', HttpStatus.FORBIDDEN);
    next();
  }
}
