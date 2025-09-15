import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ListScenarioRepository } from '../repository/list-scenario.repository';

@Injectable()
export class ListScenarioUseCase {
  constructor(
    private readonly listScenarioRepository: ListScenarioRepository,
  private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const scenarios = await this.listScenarioRepository.listScenario();
      this.logger.log('Scenario list successfully', ListScenarioUseCase.name);
      return scenarios;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(error.message, error.stack, ListScenarioUseCase.name);
        throw new ServiceUnavailableException('Error listing scenarios', {
          cause: error,
          description: error.message,
        });
      }
      this.logger.error('Unknown error while listing scenarios', JSON.stringify(error), ListScenarioUseCase.name);
      throw new ServiceUnavailableException('Unknown error occurred while listing scenarios');
    }
  }
}
