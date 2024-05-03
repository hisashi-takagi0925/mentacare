import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @HideField()
  password: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
