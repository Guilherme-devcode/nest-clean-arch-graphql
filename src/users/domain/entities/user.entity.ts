import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class User {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString({
    message: 'Senha precisa ser em string',
  })
  @MinLength(6)
  readonly password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
