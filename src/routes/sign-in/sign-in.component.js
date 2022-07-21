import { useEffect } from 'react'; //needed for proper redirect handling
import { getRedirectResult } from 'firebase/auth';//needed for proper redirect handling
//https://firebase.google.com/docs/auth/web/google-signin
import {
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect 
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {
    //process the sign in with redirect > to retrieve users' data and store in db
    useEffect(
        () => async () => {
          const response = await getRedirectResult(auth);
          console.log(response);
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user); 
          }
        },[]);
    
//sign in wihtout redirect
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
        
    // }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;