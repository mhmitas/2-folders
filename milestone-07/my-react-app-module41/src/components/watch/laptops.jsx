const Laptops = ({ laptop }) => {

    const { name, brand, price } = laptop


    return (
        <div>
            <div className="myclass">
                <h3>Name: {name}</h3>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Laptops;