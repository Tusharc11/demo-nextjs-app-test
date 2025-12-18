import { getCartProducts } from "./serverCart";
import CartClient from "./CartClient";

export const dynamic = "force-dynamic";

export default async function Page() {
  const products = await getCartProducts();
  return <CartClient products={products} />;
}
