import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { UserDocument, UserModel } from '../schema/user.scema';

@Injectable()
export class MongoUserRepository implements UserRepository {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users.map(
      (user) =>
        new User(user._id.toString(), user.name, user.email, user.password),
    );
  }

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    const savedUser = await createdUser.save();
    return new User(
      savedUser._id.toString(),
      savedUser.name,
      savedUser.email,
      savedUser.password,
    );
  }
}
