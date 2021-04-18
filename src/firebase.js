import { firebase } from '@firebase/app';
import '@firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCZXc1f77zwJWB5Etq-ZSN7fgL0QgdnD6Q",
    authDomain: "vuejsexam-1475b.firebaseapp.com",
    databaseURL: "https://vuejsexam-1475b-default-rtdb.firebaseio.com",
    projectId: "vuejsexam-1475b",
    storageBucket: "vuejsexam-1475b.appspot.com",
    messagingSenderId: "433509863807",
    appId: "1:433509863807:web:64824c1ec34a2096a18a4a",
    measurementId: "G-SKLVNSKWFX"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)


export const db = firebaseApp.database();
export const valuesRef = db.ref('values')
export const principlesRef = db.ref('principles')
