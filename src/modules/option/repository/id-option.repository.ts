/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class IdOptionRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findbyone (id: string) {
 
    const option = await this.prisma.option.findUnique({
           where: {id}
    });
    return option;
  }
}