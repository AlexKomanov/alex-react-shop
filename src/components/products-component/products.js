import Product from "../product-component/product";
import './products.css';

const Products = ({products}) => {
    const elements = products.map((product) => {
        const {...productProps} = product;
        return (
            <Product {...productProps}/>
        )
    })
    return (
        <section className="products">
            {elements}
        </section>
    );
};

export default Products;