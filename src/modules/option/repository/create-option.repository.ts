import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateOptionDto } from '../dto/create-option.dto';

@Injectable()
export class CreateOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOptionDto) {
    const { scenarioId, ...rest } = data;

    const option = await this.prisma.option.create({
      data: {
        ...rest,
        scenario: {
          connect: { id: scenarioId },
        },
      },
    });

    return option;
  }
}
