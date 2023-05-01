import swell from "./client";

export const addToCart = async (item: any) => {
  return await swell.cart.addItem(item);
};

// export const removeFromCart = async (itemId: string) => {
//   return await swell.cart.removeItem(itemId);
// };

export const getCart = async () => {
  const res = await swell.cart.get();
  return res;
};

export const removeFromCart = async (itemId: string) => {
  return await swell.cart.removeItem(itemId);
};
