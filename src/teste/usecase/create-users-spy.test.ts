import { UsersRepository } from '@/repository/users-repository'
import { CreateUsersUseCase } from '@/usecase/create-users-usecase'
import { FindUsersUseCase } from '@/usecase/find-users-usecase'
import { beforeEach, describe, expect, it, vi } from 'vitest'
describe('UsersSpy', () => {
  let usersRepository: UsersRepository

  beforeEach(() => {
    usersRepository = {
      save: vi.fn(),
      find: vi.fn(),
    } as any
  })

  describe('CreateUsersCase', () => {
    it('should save success', async () => {
      vi.spyOn(usersRepository, 'save').mockResolvedValue()

      const sut = new CreateUsersUseCase(usersRepository)
      await sut.execute('Marcus')
    })
  })
  describe('FindUsersCase', () => {
    it('should find success', async () => {
      vi.spyOn(usersRepository, 'find').mockResolvedValue(['Marcus'])

      const sut = new FindUsersUseCase(usersRepository)
      const response = await sut.execute()
      expect(response).toEqual(['Marcus'])
    })
    it('should find error', async () => {
      vi.spyOn(usersRepository, 'find').mockRejectedValue(
        new Error('invalid query')
      )
      const sut = new FindUsersUseCase(usersRepository)
      expect(sut.execute()).rejects.toThrow('invalid query')
    })
  })
})
