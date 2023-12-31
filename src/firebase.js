import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCyYIhxnEZyeX8iSti--ObuZCSIMv5A1cY",
  authDomain: "whats-app-clone-dfb71.firebaseapp.com",
  databaseUrl: "https://whats-app-clone-dfb71.firebaseio.com",
  projectId: "whats-app-clone-dfb71",
  storageBucket: "whats-app-clone-dfb71.appspot.com",
  messagingSenderId: "997948125274",
  appId: "1:997948125274:web:913e84c565b60d420c6863"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;