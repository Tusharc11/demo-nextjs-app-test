"use client";

import { CartItemCard } from "core/components/cart-item-card/cart-item-card";
import { Summary } from "core/components/summary/summary";
import styles from "./page.module.scss";
import { FakeAPIProduct } from "core/types/product";

/**
 * Cart item structure
 */
type CartItem = {
  product: FakeAPIProduct;
  quantity: number;
};

/**
 * Props expected by CartClient
 */
type CartClientProps = {
  products: CartItem[];
};

export default function CartClient({ products }: CartClientProps) {
  if (!products || products.length === 0) {
    return <h1>Empty cart</h1>;
  }

  return (
    <>
      <div className={styles["items"]}>
        {products.map((item) => (
          <CartItemCard
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className={styles["summary"]}>
        <Summary />
      </div>
    </>
  );
}
