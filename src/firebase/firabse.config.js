// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLMKOAFAIBCq4g0m2Wnl57HRj0rSFu6sk",
    authDomain: "eye-specialist-client.firebaseapp.com",
    projectId: "eye-specialist-client",
    storageBucket: "eye-specialist-client.appspot.com",
    messagingSenderId: "536810520208",
    appId: "1:536810520208:web:ce15d93b8b103175c2a215"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);