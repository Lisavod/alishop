import {useState, createContext, useEffect} from 'react';
// import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},

});
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    //populate our DB with DATA only once
    // useEffect(()=> {
    //     addCollectionAndDocuments('categories', SHOP_DATA, title)
    // }, [])
    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
        
    }, []);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}