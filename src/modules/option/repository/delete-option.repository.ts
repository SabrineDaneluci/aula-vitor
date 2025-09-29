import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class DeleteOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async deleteOption(id: string) {
    const option = await this.prisma.option.delete({
      where: { id },
    });
    return option;
  }
}
