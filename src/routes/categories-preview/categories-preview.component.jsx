


// import SHOP_DATA from '../../shop-data.json'; replace with a ProductsProvider data
import React, { Fragment } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context'; //import the ProductContex component
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';



const CategoriesPreview = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    

    return (
        <Fragment>
            {isLoading ? <Spinner/> : 
                (Object.keys(categoriesMap).map(title => {
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
                }))
            }
         </Fragment>
    );
    
}

export default CategoriesPreview;