// src/app/cart/serverCart.ts
import { FakeAPIProduct } from "core/types/product";

export type CartItem = {
  product: FakeAPIProduct;
  quantity: number;
};

export async function getCartProducts(): Promise<CartItem[]> {
  try {
    const cartsRes = await fetch("https://fakestoreapi.com/carts", { cache: "no-store" });
    if (!cartsRes.ok) return [];

    const cartsData = await cartsRes.json();

    // fetch all products to match IDs
    const productsRes = await fetch("https://fakestoreapi.com/products");
    if (!productsRes.ok) return [];

    const allProducts: FakeAPIProduct[] = await productsRes.json();

    const cartItems: CartItem[] = [];

    cartsData.forEach((cart: any) => {
      cart.products.forEach((item: any) => {
        const product = allProducts.find(p => p.id === item.productId);
        if (product) cartItems.push({ product, quantity: item.quantity });
      });
    });

    return cartItems;
  } catch (err) {
    console.error("Failed to fetch cart products:", err);
    return [];
  }
}
