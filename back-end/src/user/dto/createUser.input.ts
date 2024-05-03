import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  firstname: string;

  @Field()
  @IsNotEmpty()
  lastname: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  role: Role;

  @Field()
  @MinLength(8)
  password: string;
}
