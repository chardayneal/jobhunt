import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseConfig";


const auth = getAuth(app);


//CREATE NEW USER ACCOUNT

export const createNewUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(`New user created ${name}`);
    console.log('User:', user);
    // NAVIGATE TO NEW USER'S DASHBOARD
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // HANDLE ERROR WITH CREATING NEW ACCOUNT
  });
};


// LOGIN USER WITH EMAIL AND PW
export const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    document.getElementById('login-error').style = 'display: none';
    const user = userCredential.user;
    //ATTACH AN OBSERVER TO GLOBAL AUTH OBJECT
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of avai
            const uid = user.uid;
            console.log('user signed in', uid);
        } else {
            // User is signed out
            // ...
        }
    });
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("User not found");
    document.getElementById('login-error').style = 'display: block';
    });
};



