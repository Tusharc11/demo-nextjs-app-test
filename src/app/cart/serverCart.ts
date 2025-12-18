export async function getCartProducts() {
  const res = await fetch("https://fakestoreapi.com/carts", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}
