import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDauuLp3LJ3zayceSU7DhgwqVlqq9Ra2Uw",
    authDomain: "ecommerceclothing-9b84e.firebaseapp.com",
    databaseURL: "https://ecommerceclothing-9b84e.firebaseio.com",
    projectId: "ecommerceclothing-9b84e",
    storageBucket: "ecommerceclothing-9b84e.appspot.com",
    messagingSenderId: "111548941932",
    appId: "1:111548941932:web:02c282a39ceca302efba49",
    measurementId: "G-DLQ32G10YT"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot) ;
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(e){
            console.log("error creating user",e);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;