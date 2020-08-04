import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAg83r75lWFo3LKYEwsFKydbEhv8cp0wos",
    authDomain: "fir-kickstart-a9d63.firebaseapp.com",
    databaseURL: "https://fir-kickstart-a9d63.firebaseio.com",
    projectId: "fir-kickstart-a9d63",
    storageBucket: "fir-kickstart-a9d63.appspot.com",
    messagingSenderId: "16423662726",
    appId: "1:16423662726:web:725a0c6ed461afa8934d07"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore()
const auth = firebase.auth()

//collections
const usersCollection = db.collection('users')

export {
    db,
    auth,
    usersCollection
}