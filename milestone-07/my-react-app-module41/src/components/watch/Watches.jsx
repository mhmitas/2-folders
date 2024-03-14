const Watches = ({ watch }) => {
    // const { name, brand } = smartWatch
    // console.log(watch.brand)
    const { name, brand, price } = watch


    return (
        <div>
            <div className="box">
                <h3>Name: {name}</h3>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Watches;