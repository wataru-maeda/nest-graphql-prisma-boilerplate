import { Injectable } from '@nestjs/common';
import { User, UserCreateInput, UserUpdateInput } from './user.inout';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUsers(keyword: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        OR: [{ email: { contains: keyword } }, { name: { contains: keyword } }],
      },
    });
  }

  async createUser(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(data: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id: data.id },
      data,
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
