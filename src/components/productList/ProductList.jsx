import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          These are the some of the projects which I built during my academic degree.For more information checkout my <a href="https://github.com/sahild23" target="_blank" rel="noreferrer">Github</a> profile.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} text={item.text} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
