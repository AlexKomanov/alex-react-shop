import Product from "../product-component/product";
import './products.css';

const Products = ({products}) => {
    const elements = products.map((product) => {
        const {id, ...productProps} = product;
        return (
            <Product key={id} {...productProps} />
        )
    })
    return (
        <section className="products">
            {elements}
        </section>
    );
};

export default Products;