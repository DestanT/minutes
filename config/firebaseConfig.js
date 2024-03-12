// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKs6qAbudFq9mszVOc40HctgSNcy9tWLQ',
  authDomain: 'minutes-457af.firebaseapp.com',
  projectId: 'minutes-457af',
  storageBucket: 'minutes-457af.appspot.com',
  messagingSenderId: '938468797047',
  appId: '1:938468797047:web:caa7faeb1aeff923893472',
  measurementId: 'G-CN2WB4RERK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
