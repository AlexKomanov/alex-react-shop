import Header from "../header-component/header";
import Products from "../products-component/products";
import allProducts from '../../products.json';
import './app.css';
import {useState} from "react";

const App = () => {
    const [products, setProducts] = useState(allProducts);
    const [filteredProducts, setFilteredProducts] = useState(products);

    return (
        <div>
            <Header products={products} setProducts={setFilteredProducts}/>
            <Products products={filteredProducts}/>
        </div>
    );
};

export default App;