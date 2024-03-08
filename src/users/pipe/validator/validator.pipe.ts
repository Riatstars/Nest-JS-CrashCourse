import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidatorPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Validator pipe activatied');
    console.log(value);
    console.log(metadata);
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(value.age + ' is not a number');
      throw new HttpException(
        'Invalid datatype for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log(value.age + ' is a number');
      return { ...value, age: parseAgeToInt };
    }
  }
}
