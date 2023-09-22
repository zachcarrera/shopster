import { createContext } from "react";
import { CartProduct } from "../views/OneProductView/OneProductView";

type CartContextType = [CartProduct[], (cart: CartProduct[]) => void];
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
