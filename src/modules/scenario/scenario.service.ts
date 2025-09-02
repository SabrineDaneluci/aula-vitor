import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  ListScenarioUseCase: any;
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data) 
  }

  findAll() {
    return this.listScenarioUseCase.execute()
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
