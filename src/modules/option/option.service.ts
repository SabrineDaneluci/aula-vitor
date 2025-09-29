import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase } from './use-cases/create-option.use-case';
import { UpdateOptionUseCase } from './use-cases/update-option.use-case';
import { DeleteOptionUseCase } from './use-cases/delete-option.use-case';
import { FindOneOptionUseCase } from './use-cases/find-one-option.use-case';
import { ListOptionUseCase } from './use-cases/list-option.use-case';

@Injectable()
export class OptionService {
  constructor(
    private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly findOneOptionUseCase: FindOneOptionUseCase,
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
  ) {}

  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneOptionUseCase.execute(id);
  }

  update(id: string, data: UpdateOptionDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.updateOptionUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}
