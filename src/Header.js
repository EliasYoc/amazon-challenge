import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasketRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { signOut } from "@firebase/auth";
import { auth } from "./firebaseConfig";
import { connectFirestoreEmulator } from "@firebase/firestore";
const Header = () => {
  const [{ bascket, user }, _] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      signOut(auth)
        .then((el) => console.log(el))
        .catch((err) => connectFirestoreEmulator.log(err));
    }
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="a"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <nav className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOn">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOn">Hello guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Hello guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>

        <Link to="checkout">
          <div className="header__optionBasket">
            <ShoppingBasketRounded />
            <span className="header__optionLineTwo header__basketCount">
              {bascket?.length}
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
