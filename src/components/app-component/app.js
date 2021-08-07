import Header from "../header-component/header";
import Products from "../products-component/products";
import products from '../../products.json';
import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <Products products={products}/>
        </div>
    );
};

export default App;