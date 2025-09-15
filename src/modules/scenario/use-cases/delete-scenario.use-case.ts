import { Injectable, Logger } from '@nestjs/common';
import { DeleteScenarioRepository } from '../repository/delete-scenario.repository';

@Injectable()
export class DeleteScenarioUseCase {
  constructor(
    private readonly deleteScenarioRepository: DeleteScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const scenario = await this.deleteScenarioRepository.deleteScenario(id);
      this.logger.log(`Scenario deleted: ${id}`);
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
