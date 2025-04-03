import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserUseCase } from '../application/usecases/create-user.usecase';
import { GetAllUserUseCase } from '../application/usecases/get-all.usecase';
import { UserRepository } from '../domain/repositories/user.repository';
import { MongoUserRepository } from './database/mongoose/repositories/mongo-user.repository';
import { UserModel, UserSchema } from './database/mongoose/schema/user.scema';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [
    UsersResolver,
    CreateUserUseCase,
    GetAllUserUseCase,
    { provide: UserRepository, useClass: MongoUserRepository },
  ],
})
export class UsersModule {}
