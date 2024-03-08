import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: '123', email: '123@gmail.com' },
    { username: '234', email: '234@gmail.com' },
    { username: '345', email: '345@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }
  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}
