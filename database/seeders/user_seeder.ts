import User from '#users/models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      fullName: 'Mems',
      email: 'mems@example.com',
      password: 'secret123',
    })
  }
}
