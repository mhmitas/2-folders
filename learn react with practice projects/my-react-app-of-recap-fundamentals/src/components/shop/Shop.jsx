import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)

    return (
        <div>
            <h2>Welcome to our shop!</h2>
            <p>Total Products: {products.length}</p><hr />

            <div className="container">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;