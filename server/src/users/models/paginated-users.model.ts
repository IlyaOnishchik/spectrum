import { ObjectType } from "@nestjs/graphql";
import { Paginate } from "src/helpers/paginate";
import { User } from "./user.entity";

@ObjectType()
export class PaginatedUsers extends Paginate(User) {}