import { UserRole } from '#users/enums/user_role'
import User from '#users/models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'Mems',
        email: 'mems@example.com',
        password: 'secret123',
        roleId: UserRole.Admin,
      },
      {
        fullName: 'Restaurant',
        email: 'restaurant@example.com',
        password: 'secret123',
        roleId: UserRole.Restaurant,
      },
    ])
  }
}
