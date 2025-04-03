import { Injectable } from '@nestjs/common';
import { User } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserDto): Promise<string> {
    if (!data.email || !data.name || !data.password) {
      throw new Error('Invalid data');
    }
    const user = new User(
      crypto.randomUUID(),
      data.name,
      data.email,
      data.password,
    );
    await this.userRepository.create(user);
    return 'Usuário criado com Sucesso!';
  }
}
