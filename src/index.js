import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.contex';
import { ProductsProvider } from './contexts/products.contex';
import { DropdownProvider } from './contexts/dropdown.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <DropdownProvider>
                        <App />
                    </DropdownProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter> 
    </React.StrictMode>
);

