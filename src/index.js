import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.scss';
import App from './App';
// import { UserProvider } from './contexts/user.contex';
// import { CategoriesProvider } from './contexts/categories.context';
// import { DropdownProvider } from './contexts/dropdown.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/* <UserProvider>
                    <CategoriesProvider>
                        <DropdownProvider> */}
                        <App />
                        {/* </DropdownProvider>
                    </CategoriesProvider>
                </UserProvider> */}
            </BrowserRouter> 
        </Provider>
    </React.StrictMode>
);

