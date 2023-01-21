import { Role } from "./Role"

export type User = {
  id: string
  email: string
  roles: Role[]
  isActivated: boolean
  isBanned: boolean
}