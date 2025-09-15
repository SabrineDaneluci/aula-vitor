import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';

import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { UpdateScenarioUseCase } from './use-cases/update-scenario.use-case';
import { DeleteScenarioUseCase } from './use-cases/delete-scenario.use-case';
import { FindOneScenarioUseCase } from './use-cases/find-one-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/list-scenario.use-case';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,
    private readonly findOneScenarioUseCase: FindOneScenarioUseCase,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
  ) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScenarioUseCase.execute(id);
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
