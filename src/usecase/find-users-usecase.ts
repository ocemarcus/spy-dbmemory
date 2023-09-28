import { UsersRepository } from '@/repository/users-repository'

export class FindUsersUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}
  public async execute() {
    try {
      return await this.usersRepository.find()
    } catch (error) {
      throw error
    }
  }
}
