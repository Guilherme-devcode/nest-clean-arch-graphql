import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { GetAllUserDto } from '../dtos/get-all.dto';

@Injectable()
export class GetAllUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<GetAllUserDto[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
