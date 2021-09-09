import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./context/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ bascket }, dispatch] = useStateValue();
  // console.log(bascket);
  console.log("subtotal");
  const bascketPrice = bascket.reduce(
    (accum, item) => accum + Number(item.price),
    0
  );
  // console.log(bascketPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({bascket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={bascketPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
