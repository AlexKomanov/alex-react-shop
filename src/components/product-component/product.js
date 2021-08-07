import './product.css';

const Product = ({ id, title, price, description, category, image}) => {
    return (
        <div className="product-card" key={id}>
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-info">
                <h2>{title}</h2>
                <h6>Category: {category}</h6>
                <h5>Description: {description}</h5>
                <h6>Price: {price} $</h6>
            </div>
        </div>
    );
};

export default Product;