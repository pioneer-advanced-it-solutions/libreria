import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const updatedCartItems = [...state.cartItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    });
  },
  removeFromCart: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),
}));

export default useCartStore;
