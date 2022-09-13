// // import SHOP_DATA from '../../shop-data.json'; replace with a ProductsProvider data
// import { useContext, Fragment } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context'; //import the ProductContex component
// import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import './shop.styles.scss';

const Shop = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    
    return (

        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>

         
        </Routes>
        // <div className='shop-container'>
            
       
       
           
        //     { Object.keys(categoriesMap).map(title => {
        //         const products = categoriesMap[title];
        //         return <CategoryPreview key={title} title={title} products={products}/>
            
        //         // <Fragment key={title}>
        //         //     <h2>{title}</h2>
        //         //     <div className='products-container'>
        //         //         {categoriesMap[title].map((product) => (
        //         //             <ProductCard key={product.id} product={product}/>
        //         //         ))}
        //         //     </div>
        //         // </Fragment>
        //     })}
        //  </div>
    );
    
}

export default Shop;