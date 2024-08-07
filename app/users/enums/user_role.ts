export const UserRole = {
  Admin: 1,
  Restaurant: 2,
} as const

export type IUserRole = (typeof UserRole)[keyof typeof UserRole]

export const UserRoleText = {
  [UserRole.Admin]: 'Admin',
  [UserRole.Restaurant]: 'Restaurant',
}
