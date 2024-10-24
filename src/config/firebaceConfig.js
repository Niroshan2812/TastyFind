import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxx.firebaseapp.com",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "x:xxxxxxxxxx:xxxxxxxxx:xxxxxxxxxxxx",
  };
  const app = initializeApp(firebaseConfig);

  // Firestore and Auth initialization
  const db = getFirestore(app);
  const auth = getAuth(app);  // Using getAuth instead of initializeAuth
  
  export { auth, db };

/*  
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "s-xxxxxxxxxxxxxxxx",
    authDomain: "s.firebaseapp.com",
    projectId: "s",
    storageBucket: "s.appspot.com",
    messagingSenderId: "s",
    appId: "x:s:android:s",
  };
  const app = initializeApp(firebaseConfig);
 const app = initializeApp(firebaseConfig);

  // Firestore and Auth initialization
  const db = getFirestore(app);
  const auth = getAuth(app);  // Using getAuth instead of initializeAuth
  
  export { auth, db };

*/
