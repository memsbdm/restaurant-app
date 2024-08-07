export const UserRole = {
  ADMIN: 1,
  RESTAURANT: 2,
} as const

export type UserRoleId = (typeof UserRole)[keyof typeof UserRole]

export const UserRoleText = {
  [UserRole.ADMIN]: 'Admin',
  [UserRole.RESTAURANT]: 'Restaurant',
}
