import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO_-zVkpRDB9WQvXaLPc4DrPLPFHVhx5M",
    authDomain: "minyak-8b451.firebaseapp.com",
    databaseURL: "https://minyak-8b451.firebaseio.com",
    projectId: "minyak-8b451",
    storageBucket: "minyak-8b451.appspot.com",
    messagingSenderId: "231699857446",
    appId: "1:231699857446:web:08cc1c824ca9cfd49be6e7",
    measurementId: "G-95RCECG5P4"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();