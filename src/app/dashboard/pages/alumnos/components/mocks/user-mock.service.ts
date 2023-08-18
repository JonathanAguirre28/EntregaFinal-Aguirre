import { User } from "../../models";

export class UserMockService {
    private users: User[] = [
        {
          id: 1,
          name: 'fake_name',
          surname: 'fake_surname',
          email: 'fake@gmail.com',
          password: '123456',
        },
      ];

    getUsers(): User[] {
    return this.users;
  }
 }