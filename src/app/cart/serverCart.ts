import { FakeAPIProduct } from "core/types/product";

export type CartItem = {
  product: FakeAPIProduct;
  quantity: number;
};

export async function getCartProducts(): Promise<CartItem[]> {
  // Step 1: fetch carts
  const cartsRes = await fetch("https://fakestoreapi.com/carts", { cache: "no-store" });
  if (!cartsRes.ok) return [];

  const cartsData: { products: { productId: number; quantity: number }[] }[] = await cartsRes.json();

  // Step 2: flatten all cart products
  const cartProducts: CartItem[] = [];

  for (const cart of cartsData) {
    for (const item of cart.products) {
      // Fetch full product details
      const productRes = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
      if (!productRes.ok) continue;

      const product: FakeAPIProduct = await productRes.json();
      cartProducts.push({
        product,
        quantity: item.quantity,
      });
    }
  }

  return cartProducts;
}
