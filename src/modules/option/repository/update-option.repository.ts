import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateOptionDto } from '../dto/update-option.dto';

@Injectable()
export class UpdateOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async updateOption(id: string, data: UpdateOptionDto) {
    const { scenarioId, ...rest } = data;

    const option = await this.prisma.option.update({
      where: { id }, // ✅ CORRETO: Prisma espera "where"
      data: {
        ...rest,
        ...(scenarioId && {
          scenario: {
            connect: { id: scenarioId },
          },
        }),
      },
    });

    return option;
  }
}
