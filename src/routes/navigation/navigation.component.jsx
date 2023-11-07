import { useSelector } from "react-redux";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { Outlet } from "react-router-dom";

import { selectIsCartOpen } from "../../store/cart/cart.select";
import { ReactComponent as LiyuLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  //const { currentUser, setCurrentUser } = useContext(UserContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  //console.log("from navigation", currentUser);
  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <LiyuLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to="/auth">SIGNIN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
