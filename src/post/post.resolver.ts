import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostOutput, PostCreateInput, PostUpdateInput } from './post.inout';

@Resolver(() => PostOutput)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => PostOutput, { nullable: true })
  post(@Args('id') id: number) {
    return this.postService.getPost(id);
  }

  @Query(() => [PostOutput])
  posts(@Args('authorId') authorId: number) {
    return this.postService.getPosts(authorId);
  }

  @Mutation(() => PostOutput)
  createPost(@Args('input') input: PostCreateInput) {
    return this.postService.createPost(input);
  }

  @Mutation(() => PostOutput)
  updatePost(@Args('input') input: PostUpdateInput) {
    return this.postService.updatePost(input);
  }

  @Mutation(() => PostOutput)
  deletePost(@Args('id') id: number) {
    return this.postService.deletePost(id);
  }
}
