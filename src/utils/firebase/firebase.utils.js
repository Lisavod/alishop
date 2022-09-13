import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, //listener of Auth state change

} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection, //needed to create new DB collection -> allow us to get a collection references
    writeBatch,
    query,
    getDocs,
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
console.log(firebaseApp)
const googleProvider = new GoogleAuthProvider(); //https://firebase.google.com/docs/reference/node/firebase.auth.GoogleAuthProvider


googleProvider.setCustomParameters({
    prompt: 'select_account'
});
// Forces account selection even when one account
// is available.
//https://firebase.google.com/docs/reference/js/v8/firebase.auth.GoogleAuthProvider#setcustomparameters

//for multiple providers usage https://firebase.google.com/docs/auth/web/firebaseui


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //create our DB

//create a new collection and upload the data there
export const addCollectionAndDocuments = async(
    collectionKey,
    objectsToAdd,
    field) => {
    const collectionRef = collection(db, collectionKey); //create new collection
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q); //async ability to fetch a collection snapshop
    console.log(querySnapshot);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshop) => {
        const { title, items } = docSnapshop.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
};


export const createUserDocumentFromAuth = async(userAuth, additionaInformation = {}) => {
    //additionalInformation parameter add to extend func for email/pass sign up case
    //additionaInformation = {} -> by default it is empty
    if (!userAuth) return;

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
                createdAt,
                ...additionaInformation,
            })

        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassowrd = async(email, password) => {
        if (!email || !password) return

        return await createUserWithEmailAndPassword(auth, email, password);

        // ...
    } //use a FireBase method for email/pass users Auth

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
        if (!email || !password) return

        return await signInWithEmailAndPassword(auth, email, password);

        // ...
    } //use a FireBase method for email/pass users Auth

export const signOutUser = async() => await signOut(auth);
//use a FireBase  signOut method to sign out the user based on auth


export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
//call callback whenever auth changed