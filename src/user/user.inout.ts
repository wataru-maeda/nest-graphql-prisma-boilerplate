import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { PostOutput } from '../post/post.inout';

export type { User } from '@prisma/client';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  @IsEmail()
  email: string;
}

@InputType()
export class UserUpdateInput {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: true })
  name: string;
}

@ObjectType()
export class UserOutput {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  @IsEmail()
  email: string;

  @Field(() => [PostOutput], { nullable: true })
  posts: PostOutput[];
}
