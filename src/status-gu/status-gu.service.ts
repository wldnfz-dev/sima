import { Injectable } from '@nestjs/common';
import { CreateStatusGuDto } from './dto/create-status-gu.dto';
import { UpdateStatusGuDto } from './dto/update-status-gu.dto';
import { StatusGu } from './entities/status-gu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatusGuService {
  constructor(
    @InjectRepository(StatusGu) private statusGuRepo : Repository<StatusGu>
  ){}

  create(createStatusGuDto: CreateStatusGuDto) {
    return this.statusGuRepo.save(createStatusGuDto);
  }

  findAll() {
    return this.statusGuRepo.find();
  }

  findOne(id: number) {
    return this.statusGuRepo.findOne({ where: {id: id }});
  }

  update(id: number, updateStatusGuDto: UpdateStatusGuDto) {
    updateStatusGuDto.id = id
    return this.statusGuRepo.save(updateStatusGuDto);
  }

  async remove(id: number) {
    let statusGu = await this.statusGuRepo.findOne({ where: {id: id }});
    return this.statusGuRepo.remove(statusGu);
  }
}
