import { UserRole, UserRoleText } from '#users/enums/user_role'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable().unique()
    })

    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        {
          id: UserRole.Admin,
          name: UserRoleText[UserRole.Admin],
        },
        {
          id: UserRole.Restaurant,
          name: UserRoleText[UserRole.Restaurant],
        },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
