// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import React from 'react'

function Firebase() {
  return (
    <div>Firebase</div>
  )
}

// export default Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHZ6PW2GqesnUrqiHKLFxkNKa6_9vSu7c",
    authDomain: "netflix-clone-254.firebaseapp.com",
    projectId: "netflix-clone-254",
    storageBucket: "netflix-clone-254.appspot.com",
    messagingSenderId: "1088209326525",
    appId: "1:1088209326525:web:ed63ab1bea82a8ad8d02d4",
    measurementId: "G-JK0QP2G95G"
};
// Google

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
    }
};
// Facebook
// const facebookProvider = new FacebookAuthProvider();
// const signInWithFacebook = async () => {
//     try {
//         const res = await signInWithPopup(auth, facebookProvider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs.length === 0) {
//             await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "facebook",
//                 email: user.email,
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// }


// Email and Password
const logInWithEmailAndPassword = async (email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
};
// Create user with email and password

// const createUserWithEmailAndPassword = async (name,email, password) => { 
//     try {
//         await createUserWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// }
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
};

//send pasword reset email
const PasswordResetEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        // alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
}

// signout
const LogOut = async () => {
    try {
        await signOut(auth);

    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
}

//get user
const getUser = async () => {
    try {
        const user = await getAuth().currentUser;
        return user;
    } catch (err) {
        console.error(err);
        // alert(err.message);
    }
}

// check logged in


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
    auth,
    db,
    analytics,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    PasswordResetEmail,
    LogOut,
    getUser,
};