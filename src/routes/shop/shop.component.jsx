// import SHOP_DATA from '../../shop-data.json'; replace with a ProductsProvider data
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.contex'; //import the ProductContex component
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        
        <div className='products-container'>
            {products.map((products) => (
                <ProductCard key={products.id} product={products}/>
            ))}
        </div>
            
        
    );
    
}

export default Shop;