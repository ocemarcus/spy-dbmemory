export interface UsersRepository {
  find(): Promise<string[]>
  save(name: string): Promise<void>
}
