const firebaseConfig = {
    apiKey: "AIzaSyCyYIhxnEZyeX8iSti--ObuZCSIMv5A1cY",
    authDomain: "whats-app-clone-dfb71.firebaseapp.com",
    projectId: "whats-app-clone-dfb71",
    //alper torun database url girilmesi lazım :
    storageBucket: "whats-app-clone-dfb71.appspot.com",
    messagingSenderId: "997948125274",
    appId: "1:997948125274:web:913e84c565b60d420c6863"
    //alper torun measurment Id girilmesi lazıms :
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth().GoogleAuthProvider();

export {auth,provider};
export default db;

// 1.58.00 ---- devam//


