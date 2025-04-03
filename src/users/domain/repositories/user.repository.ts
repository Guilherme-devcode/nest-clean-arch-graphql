import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract getAll(): Promise<User[]>;
  //   abstract findByEmail(email: string): Promise<any>;
  //   abstract findById(id: string): Promise<any>;
  //   abstract update(id: string, user: any): Promise<any>;
  //   abstract delete(id: string): Promise<any>;
}
