
const Products = ({product}) => {

    const {title, image, description, price} = product
    console.log(product)
    return (
        <div className="box2">
            {/* <small>Hello</small> */}
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{description.slice(0,100)}...</p>
            <p className="border">Price: ${price}</p>

        </div>
    );
};

export default Products;