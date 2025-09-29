import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ListOptionRepository } from '../repository/list-option.repository';

@Injectable()
export class ListOptionUseCase {
  constructor(
    private readonly listoptionRepository: ListOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const option = await this.listoptionRepository.listOption();
      this.logger.log('Option list successfully', ListOptionUseCase.name);
      return option;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(error.message, error.stack, ListOptionUseCase.name);
        throw new ServiceUnavailableException('Error listing Options', {
          cause: error,
          description: error.message,
        });
      }
      this.logger.error('Unknown error while listing Options', JSON.stringify(error), ListOptionUseCase.name);
      throw new ServiceUnavailableException('Unknown error occurred while listing Options');
    }
  }
}
