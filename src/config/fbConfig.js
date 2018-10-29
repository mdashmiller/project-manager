import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD29q-60lPLjCwTl0G4Aljx3QSap2S8fUc",
    authDomain: "robo-plan.firebaseapp.com",
    databaseURL: "https://robo-plan.firebaseio.com",
    projectId: "robo-plan",
    storageBucket: "robo-plan.appspot.com",
    messagingSenderId: "1030475857363"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
