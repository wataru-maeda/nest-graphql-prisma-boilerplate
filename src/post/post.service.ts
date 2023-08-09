import { Injectable } from '@nestjs/common';
import { Post, PostCreateInput, PostUpdateInput } from './post.inout';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getPosts(authorId: number): Promise<Post[]> {
    return this.prisma.post.findMany({ where: { authorId } });
  }

  async createPost(data: PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async updatePost(data: PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id: data.id },
      data,
    });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
