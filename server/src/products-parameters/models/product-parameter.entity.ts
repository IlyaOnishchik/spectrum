import { Field, ObjectType } from "@nestjs/graphql";
import { Parameter } from "src/parameters/models/parameter.entity";
import { Product } from "src/products/models/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_parameters')
@ObjectType()
export class ProductParameter {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(() => Product, product => product.parameters)
  @Field(() => Product)
  product: Product;

  @ManyToOne(() => Parameter, parameter => parameter.productParameters)
  @Field(() => Parameter)
  parameter: Parameter;

  @Column()
  @Field()
  value: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  unit: string;
}