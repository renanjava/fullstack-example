import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(name: string) {
    return this.prisma.user.create({ data: { name } });
  }

  findAll() {
    return this.prisma.user.findMany({ include: { posts: true } });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    });
  }

  update(id: string, name: string) {
    return this.prisma.user.update({ where: { id }, data: { name } });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
