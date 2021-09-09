import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./context/StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ bascket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/33/img20/VideoGames/imagenes_a/gamer.png"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__title">
            Hello {user?.email}, this is your Shopping Bascket
          </h3>
          {bascket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
