import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, title: string, content: string) {
    return this.prisma.post.create({ data: { userId, title, content } });
  }

  findAll() {
    return this.prisma.post.findMany({ include: { user: true } });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  update(id: string, title: string, content: string) {
    return this.prisma.post.update({ where: { id }, data: { title, content } });
  }

  remove(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
