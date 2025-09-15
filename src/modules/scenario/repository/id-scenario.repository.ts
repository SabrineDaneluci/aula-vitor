/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class IdScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findbyone (id: string) {
 
    const scenario = await this.prisma.scenario.findUnique({
           where: {id}
    });
    return scenario;
  }
}