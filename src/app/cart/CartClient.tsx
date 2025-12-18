"use client";
import { CartItemCard } from "core/components/cart-item-card/cart-item-card";
import { Summary } from "core/components/summary/summary";
import styles from "./page.module.scss";
import { CartItem } from "./serverCart";

type CartClientProps = { products: CartItem[] };

export default function CartClient({ products }: CartClientProps) {
  return products.length > 0 ? (
    <>
      <div className={styles.items}>
        {products.map(p => (
          <CartItemCard key={p.product.id} product={p.product} quantity={p.quantity} />
        ))}
      </div>
      <div className={styles.summary}>
        <Summary />
      </div>
    </>
  ) : (
    <h1>Empty cart</h1>
  );
}
