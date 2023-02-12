import { ObjectType } from "@nestjs/graphql";
import { Paginate } from "src/helpers/paginate";
import { Order } from "./order.entity";

@ObjectType()
export class PaginatedOrders extends Paginate(Order) {}