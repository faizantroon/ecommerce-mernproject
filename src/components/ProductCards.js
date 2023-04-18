function ProductCard(props) {
  const { ProductImage2, producttitle, productprice } = props;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="products mb-3">
        <div className="product_image">
          <img src={ProductImage2} alt="prod" />
        </div>
        <div className="product_content">
          <div className="ratings my-2">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <p>{producttitle}</p>
          <h3 className="mb-3">${productprice}</h3>
          <button className="btn btn-dark  text-uppercase">add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
