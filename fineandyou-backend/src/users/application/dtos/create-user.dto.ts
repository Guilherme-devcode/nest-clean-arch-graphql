import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field({ description: 'Nome do usuário' })
  name: string;
  @Field({ description: 'Senha do usuário', nullable: true })
  password: string;
  @Field({ description: 'Email do usuário' })
  email: string;
}
