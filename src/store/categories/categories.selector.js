import { createSelector } from 'reselect'; //ctreats a memoised selector
//if the input doesn't change it returen the same output

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);



export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log('selector fired')
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);