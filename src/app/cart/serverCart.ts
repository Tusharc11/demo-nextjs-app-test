import { FakeAPIProduct } from "core/types/product";

/**
 * Cart item structure (same as client)
 */
export type CartItem = {
  product: FakeAPIProduct;
  quantity: number;
};

export async function getCartProducts(): Promise<CartItem[]> {
  const res = await fetch("https://fakestoreapi.com/carts", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch cart products");
    return [];
  }

  return res.json();
}
