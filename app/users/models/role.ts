import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#users/models/user'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import type { IUserRole } from '#users/enums/user_role'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  declare id: IUserRole

  @column()
  declare name: string

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
