import {Prisma} from '@prisma/client';

export type ActionFunction = (
  prevState: unknown,
  formData: FormData,
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
}

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true }
}>;

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  orderTotal: number;
}