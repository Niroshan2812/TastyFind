import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDBXK7eZRKpZL6-VLeTDOykm9z1TnYQhgo",
    authDomain: "tastyfirst.firebaseapp.com",
    projectId: "tastyfirst",
    storageBucket: "tastyfirst.appspot.com",
    messagingSenderId: "875137389623",
    appId: "1:875137389623:android:bd9d25cf7108e326ad9bb2",
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
    apiKey: "s-VLeTDOykm9z1TnYQhgo",
    authDomain: "s.firebaseapp.com",
    projectId: "s",
    storageBucket: "s.appspot.com",
    messagingSenderId: "s",
    appId: "1:s:android:s",
  };
  const app = initializeApp(firebaseConfig);
 const app = initializeApp(firebaseConfig);

  // Firestore and Auth initialization
  const db = getFirestore(app);
  const auth = getAuth(app);  // Using getAuth instead of initializeAuth
  
  export { auth, db };

*/