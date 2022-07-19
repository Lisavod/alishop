import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore' //https://firebase.google.com/docs/firestore/quickstart

const firebaseConfig = {
    apiKey: "AIzaSyBqwnL6VeBypHkjQL3mupoBTWosJ3dQJlk",
    authDomain: "alishop-db.firebaseapp.com",
    projectId: "alishop-db",
    storageBucket: "alishop-db.appspot.com",
    messagingSenderId: "246467860783",
    appId: "1:246467860783:web:f6ff4bff14fb2eee72a9da"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); //https://firebase.google.com/docs/web/setup
const provider = new GoogleAuthProvider(); //https://firebase.google.com/docs/reference/node/firebase.auth.GoogleAuthProvider


provider.setCustomParameters({
    prompt: 'select_account'
});
// Forces account selection even when one account
// is available.
//https://firebase.google.com/docs/reference/js/v8/firebase.auth.GoogleAuthProvider#setcustomparameters

//for multiple providers usage https://firebase.google.com/docs/auth/web/firebaseui


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //create our DB



export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log('userDocRef');
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot); //create a new user object in db
    console.log(userSnapshot.exists()); //false, if there is no such a user in DB
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { //save user in DB
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
}