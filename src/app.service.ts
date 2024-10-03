import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string): Promise<User> {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
