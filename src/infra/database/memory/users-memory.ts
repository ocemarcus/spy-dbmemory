import { UsersRepository } from '@/repository/users-repository'

export class UsersDBMemory implements UsersRepository {
  private users: string[] = []

  async find(): Promise<string[]> {
    return this.users
  }
  async save(name: string): Promise<void> {
    this.users.push(name)
  }
}
