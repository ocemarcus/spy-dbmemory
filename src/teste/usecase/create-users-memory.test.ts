import { UsersDBMemory } from '@/infra/database/memory/users-memory'
import { UsersRepository } from '@/repository/users-repository'
import { CreateUsersUseCase } from '@/usecase/create-users-usecase'
import { FindUsersUseCase } from '@/usecase/find-users-usecase'
import { beforeEach, describe, expect, it } from 'vitest'
describe('UsersDBMemory', () => {
  let usersRepository: UsersRepository

  beforeEach(() => {
    usersRepository = new UsersDBMemory()
  })

  describe('CreateUsersCase', () => {
    it('should save success', async () => {
      const sut = new CreateUsersUseCase(usersRepository)
      await sut.execute('Marcus')

      const users = await usersRepository.find()
      expect(users.length).toBe(1)
      expect(users).toEqual(['Marcus'])
    })
  })
  describe('FindUsersCase', () => {
    it('should find success', async () => {
      await usersRepository.save('Marcus')

      const sut = new FindUsersUseCase(usersRepository)
      const response = await sut.execute()
      expect(response).toEqual(['Marcus'])
    })
    it('should find error', async () => {
      //
    })
  })
})
