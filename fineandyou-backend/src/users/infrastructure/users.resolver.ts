import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../application/dtos/create-user.dto';
import { GetAllUserDto } from '../application/dtos/get-all.dto';
import { CreateUserUseCase } from '../application/usecases/create-user.usecase';
import { GetAllUserUseCase } from '../application/usecases/get-all.usecase';
import { User } from '../domain/entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUsersUseCase: GetAllUserUseCase,
  ) {}

  @Mutation(() => String)
  async createUser(@Args('data') data: CreateUserDto): Promise<string> {
    await this.createUserUseCase.execute(data);
    return 'Usuário criado com sucesso!';
  }

  @Query(() => [GetAllUserDto])
  async getAllUsers(): Promise<GetAllUserDto[]> {
    const users = await this.getAllUsersUseCase.execute();
    return users;
  }
}
