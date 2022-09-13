


// import SHOP_DATA from '../../shop-data.json'; replace with a ProductsProvider data
import React, { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context'; //import the ProductContex component
import CategoryPreview from '../../components/category-preview/category-preview.component';



const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    
    return (
        <Fragment>
            { Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            
                // <Fragment key={title}>
                //     <h2>{title}</h2>
                //     <div className='products-container'>
                //         {categoriesMap[title].map((product) => (
                //             <ProductCard key={product.id} product={product}/>
                //         ))}
                //     </div>
                // </Fragment>
            })}
         </Fragment>
    );
    
}

export default CategoriesPreview;