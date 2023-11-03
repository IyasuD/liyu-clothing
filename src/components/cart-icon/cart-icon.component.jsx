import {
  CartIconStyled,
  ShoppingIconStyled,
  ItemCount,
} from "./cart-icon-styles.jsx";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconStyled onClick={toggleIsCartOpen}>
      <ShoppingIconStyled className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconStyled>
  );
};
export default CartIcon;
