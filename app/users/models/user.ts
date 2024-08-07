import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { Opaque } from '@adonisjs/core/types/helpers'
import { DateTime } from 'luxon'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Role from '#users/models/role'
import type { IUserRole } from '#users/enums/user_role'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export type UserId = Opaque<'UserId', string>

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: UserId

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare roleId: IUserRole

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>
}
