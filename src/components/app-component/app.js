import Header from "../header-component/header";
import Products from "../products-component/products";
import './app.css';
import Spinner from "../spinner-component/spinner";
import { useState, useEffect } from "react";

const App = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner((prev) => !prev);
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                setSpinner((prev) => !prev);
            });
    }, [])

    return (
        <div>
            <Header products={products} setProducts={setFilteredProducts}/>
            {spinner ? <Spinner/> : <Products products={filteredProducts}/>}
        </div>
    );
};

export default App;