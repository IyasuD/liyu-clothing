import {
  CartIconStyled,
  ShoppingIconStyled,
  ItemCount,
} from "./cart-icon-styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.select.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconStyled onClick={toggleIsCartOpen}>
      <ShoppingIconStyled className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconStyled>
  );
};
export default CartIcon;
