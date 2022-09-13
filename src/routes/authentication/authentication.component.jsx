import React, { useEffect } from 'react'; //needed for proper redirect handling
import { getRedirectResult } from 'firebase/auth'; //needed for proper redirect handling
//https://firebase.google.com/docs/auth/web/google-signin
import {
    auth,
    // signInWithGooglePopup,
    // signInWithGoogleRedirect
    createUserDocumentFromAuth,
   
} from '../../utils/firebase/firebase.utils';
import './authentication.style.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    //process the sign in with redirect > to retrieve users' data and store in db
    useEffect(
        () => async() => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log(userDocRef);
            }
        }, []);

    //sign in wihtout redirect
    
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});

    // }

    return ( 
        <div className='authentication-component'>
            <SignInForm />
            <SignUpForm />
            
        </div>
    )
}

export default Authentication;