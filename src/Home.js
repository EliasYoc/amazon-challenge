import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61UghvKnGDL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* product */}
          <Product title="libro" price="50.90" rating={4} />
          <Product price="9" rating={4} />
        </div>
        <div className="home__row">
          <Product title="lavadora" price="60.90" rating={5} />
          <Product title="cocina" price="150" rating={2} />
          <Product />
        </div>
        <div className="home__row">
          <Product price="10" />
        </div>
      </div>
    </div>
  );
};

export default Home;
