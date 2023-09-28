import { UsersRepository } from '@/repository/users-repository'

export class CreateUsersUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}
  public async execute(name: string) {
    try {
      await this.usersRepository.save(name)
    } catch (error) {
      throw error
    }
  }
}
