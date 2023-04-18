import ProductImage2 from "../images/prod2.png";
import ProductImage1 from "../images/prod1.png";
import ProductImage3 from "../images/prod3.png";
import ProductCard from "./ProductCards";

function Products() {
  return (
    <section className="saleproduct">
      <div className="row">
        <div className="col-md-12">
          <div className="subheading">
            <h2 className="mb-4">Sale Products</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <ProductCard
          producttitle="Product 1"
          productprice={100}
          ProductImage2={ProductImage2}
        />
        <ProductCard
          producttitle="Product 2"
          productprice={200}
          ProductImage2={ProductImage1}
        />
        <ProductCard
          producttitle="Product 3"
          productprice={300}
          ProductImage2={ProductImage3}
        />
        <ProductCard
          producttitle="Product 4"
          productprice={400}
          ProductImage2={ProductImage2}
        />
      </div>
    </section>
  );
}

export default Products;
