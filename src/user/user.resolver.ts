import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserOutput, UserCreateInput, UserUpdateInput } from './user.inout';
import { PostService } from '../post/post.service';
import { PostOutput } from '../post/post.inout';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Query(() => UserOutput, { nullable: true })
  user(@Args('id') id: number) {
    return this.userService.getUser(id);
  }

  @Query(() => [UserOutput])
  users(@Args('keyword') keyword: string) {
    return this.userService.getUsers(keyword);
  }

  @Mutation(() => UserOutput)
  createUser(@Args('input') input: UserCreateInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => UserOutput)
  updateUser(@Args('input') input: UserUpdateInput) {
    return this.userService.updateUser(input);
  }

  @Mutation(() => UserOutput)
  deleteUser(@Args('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @ResolveField(() => [PostOutput])
  async posts(@Parent() { id }: { id: number }) {
    return this.postService.getPosts(id);
  }
}
