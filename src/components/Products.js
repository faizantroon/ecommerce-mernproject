import ProductImage2 from "../images/prod2.png";
import ProductImage1 from "../images/prod1.png";
import ProductImage3 from "../images/prod3.png";
import ProductCard from "./ProductCards";

function Products() {
  const product = [
    {
      producttitle: "Product1",
      productprice: 100,
      ProductImage2: ProductImage2,
    },
    {
      producttitle: "Product2",
      productprice: 200,
      ProductImage2: ProductImage1,
    },
    {
      producttitle: "Product3",
      productprice: 400,
      ProductImage2: ProductImage3,
    },
    {
      producttitle: "Product4",
      productprice: 1000,
      ProductImage2: ProductImage1,
    },
  ];

  // console.log(product);

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
        {product.map((singleproduct) => {
          return (
            <ProductCard
              producttitle={singleproduct.producttitle}
              productprice={singleproduct.productprice}
              ProductImage2={singleproduct.ProductImage2}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Products;
