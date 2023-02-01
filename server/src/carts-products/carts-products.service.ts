import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/carts/models/cart.entity';
import { Product } from 'src/products/models/product.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CartProduct } from './models/cart-product.entity';

@Injectable()
export class CartsProductsService {
  constructor(
    @InjectRepository(CartProduct) private cartsProductsRepository: Repository<CartProduct>
  ) {}

  async create(cart: Cart, product: Product): Promise<CartProduct> {
    const cartProduct = new CartProduct();
    cartProduct.cart = cart;
    cartProduct.product = product;
    return await this.cartsProductsRepository.save(cartProduct);
  }

  async remove(cartProduct: CartProduct): Promise<Boolean> {
    const result = await this.cartsProductsRepository.remove(cartProduct);
    return result ? true : false
  }

  async findOne(where: Partial<CartProduct>): Promise<CartProduct> {
    return await this.cartsProductsRepository.findOne({ where });
  }

  async findOneByCartIdAndProductId(cartId: string, productId: string): Promise<CartProduct> {
    return await this.cartsProductsRepository.findOne({ where: { cart: { id: cartId }, product: { id: productId } } });
  }

  async updateOne(criteria, partialCartProduct: Partial<CartProduct>): Promise<UpdateResult> {
    return await this.cartsProductsRepository.update(criteria, partialCartProduct);
  }
}
