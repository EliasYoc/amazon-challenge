import { useStateValue } from "./context/StateProvider";
import { v4 as uuidv4 } from "uuid";
import "./Product.css";
const Product = ({
  id,
  title = "sin titulo",
  image,
  price = "0",
  rating = 0,
}) => {
  const [state, dispatch] = useStateValue();
  const addToBascket = () => {
    dispatch({
      type: "ADD_TO_BASCKET",
      item: {
        id: uuidv4(),
        title,
        image:
          image ||
          "https://images-na.ssl-images-amazon.com/images/I/71iLlwr7gsS.__BG0,0,0,0_FMpng_AC_UL480_SR315,480_.jpg",
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title || "the lean startup"}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price || "9.99"}</strong>
        </p>
        <div className="product__rating">
          <p>{Array(rating).fill("⭐") || "⭐"}</p>
        </div>
      </div>

      <img
        src={
          image ||
          "https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/OGYwMWQ3NzUt/OGYwMWQ3NzUt-MThkZjlmMzkt-w379._SY304_CB663318492_.jpg"
        }
        alt=""
      />
      <button onClick={addToBascket}>Add to bascket</button>
    </div>
  );
};

export default Product;
