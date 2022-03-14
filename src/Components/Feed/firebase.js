
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyDaQx5Upg6DBP-WLL7jA8a4gce-cXKDgPY",
    authDomain: "linkedin-clone-77135.firebaseapp.com",
    projectId: "linkedin-clone-77135",
    storageBucket: "linkedin-clone-77135.appspot.com",
    messagingSenderId: "969025075840",
    appId: "1:969025075840:web:c4c0000e53ef55e27a0465",
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  // export default firebase;
  export {db,auth};