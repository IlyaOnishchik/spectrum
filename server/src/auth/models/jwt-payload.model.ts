import { Role } from "src/roles/models/role.entity";

export class JwtPayload {
  id: string;
  email: string;
  roles: Role[];
}
