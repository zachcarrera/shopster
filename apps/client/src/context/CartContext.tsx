import { createContext, useContext, useState } from "react";
import { CartProduct } from "../views/OneProductView/OneProductView";

type CartContextType = [CartProduct[], (cart: CartProduct[]) => void];
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used inside of CartProvider");
  }
  return context;
};
