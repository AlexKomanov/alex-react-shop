import './header.css';
import productsList from '../../products.json'
import {useState} from "react";

const Header = ({products, setProducts}) => {

    const filterHandler = (event) => {
        event.target.value === 'All' ? setProducts(products) : setProducts(products.filter((product) => product.category === event.target.value));
        console.log(event.target.value);
    }


const categoriesList = productsList.map(p => (p.category)).filter((value, index, array) => array.indexOf(value) === index);
//console.log(categories)
const [categories] = useState(categoriesList)
return (
    <nav>
        <h1>Alex Shop</h1>

        <div className="sort">
            <div className="collection-sort">
                <label>Categories:</label>
                <select onChange={filterHandler}>
                    <option key={"1"}>All</option>
                    {categories.map(category => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="collection-sort">
                <label>Sort by:</label>
                <select>
                    <option value="/">Featured</option>
                    <option value="/">Best Selling</option>
                    <option value="/">Alphabetically, A-Z</option>
                    <option value="/">Alphabetically, Z-A</option>
                    <option value="/">Price, low to high</option>
                    <option value="/">Price, high to low</option>
                    <option value="/">Date, new to old</option>
                    <option value="/">Date, old to new</option>
                </select>
            </div>
        </div>
    </nav>
);
}
;

export default Header;