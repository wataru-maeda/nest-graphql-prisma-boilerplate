import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export type { Post } from '@prisma/client';

@InputType()
export class PostCreateInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  content: string;

  @Field(() => Boolean)
  @IsBoolean()
  published: boolean;

  @Field(() => Number, { nullable: false })
  @IsNumber()
  authorId: number;
}

@InputType()
export class PostUpdateInput {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => Number)
  authorId: number;
}

@ObjectType()
export class PostOutput {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => Boolean)
  @IsBoolean()
  published: boolean;

  @Field(() => Number, { nullable: false })
  @IsNumber()
  authorId: number;
}
