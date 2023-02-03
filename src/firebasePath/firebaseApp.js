import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAgChbNdWerT0lYEiPNxnkD1B9MKb_68d0",
    authDomain: "clone-1969a.firebaseapp.com",
    projectId: "clone-1969a",
    storageBucket: "clone-1969a.appspot.com",
    messagingSenderId: "566917351844",
    appId: "1:566917351844:web:fa283418c65164609d1931"
})

// const db=firebase.firestore()
const auth=firebase.auth()

export {auth}