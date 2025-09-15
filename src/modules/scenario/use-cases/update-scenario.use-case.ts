import { Injectable, Logger } from '@nestjs/common';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';
import { UpdateScenarioRepository } from '../repository/update-scenario.repository';

@Injectable()
export class UpdateScenarioUseCase {
  constructor(
    private readonly updateScenarioRepository: UpdateScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateScenarioDto) {
    try {
      const scenario = await this.updateScenarioRepository.updateScenario(
        id,
        data,
      );
      this.logger.log(`Scenario with id ${id} updated successfully`);
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
