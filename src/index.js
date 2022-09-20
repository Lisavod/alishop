import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import './index.scss';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'; //special Component from persist lib
// import { UserProvider } from './contexts/user.contex';
// import { CategoriesProvider } from './contexts/categories.context';
// import { DropdownProvider } from './contexts/dropdown.context';
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe.utils'; //registered Stripe publisheble key

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
        <Provider store = { store } >
            <PersistGate loading = {null} persistor = { persistor } > { /* lading null => it will render nothing until get data from localStorage*/ } 
                <BrowserRouter> {
        /* <UserProvider>
                            <CategoriesProvider>
                                <DropdownProvider> */
    } 
                    <Elements stripe={stripePromise}>
                        <App /> 
                    </Elements>              
                    
    
    {
        /* </DropdownProvider>
                            </CategoriesProvider>
                        </UserProvider> */
    }           </BrowserRouter>  
            </PersistGate> 
        </Provider>  
    </React.StrictMode>
);