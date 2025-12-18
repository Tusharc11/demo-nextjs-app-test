export const dynamic = "force-dynamic";

import styles from "./page.module.scss";
import CartClient from "./CartClient";
import { getCartProducts } from "./serverCart";

export default async function Page() {
  const products = await getCartProducts();

  return (
    <div className={styles["container"]}>
      <CartClient products={products} />
    </div>
  );
}
