import firebase from 'firebase'

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

const database = firebase.firestore()
const usersCollection = database.collection('users')

export {
    database,
    usersCollection
}





  