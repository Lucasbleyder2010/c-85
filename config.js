import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD48NgmZpPd4bGqEfCsLXiXSyD4YZ97fCw",
  authDomain: "bibbook-3d93b.firebaseapp.com",
  databaseURL: "https://bibbook-3d93b-default-rtdb.firebaseio.com",
  projectId: "bibbook-3d93b",
  storageBucket: "bibbook-3d93b.appspot.com",
  messagingSenderId: "984269307248",
  appId: "1:984269307248:web:cbd8cad891a6a9d11263b5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
