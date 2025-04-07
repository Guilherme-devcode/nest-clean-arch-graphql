import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetAllUserDto {
  @Field({ description: 'Nome do usuário' })
  name: string;
  @Field({ description: 'Senha do usuário' })
  password: string;
  @Field({ description: 'Email do usuário' })
  email: string;
}
