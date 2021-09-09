import "./CheckoutProduct.css";
import { useStateValue } from "./context/StateProvider";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ bascket }, dispatch] = useStateValue();
  const removeFromBascket = () => {
    dispatch({ type: "REMOVE_FROM_BASCKET", id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small> {price}
        </p>
        <p className="checkoutProduct__rating">{Array(rating).fill("⭐")}</p>
        <button onClick={removeFromBascket}>Remove from Bascket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
