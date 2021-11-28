import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC8LYUSLBV2BEUch19YIS_yU3-9oXY4i8Q",
    authDomain: "f1-shop---com19765-nmazz.firebaseapp.com",
    projectId: "f1-shop---com19765-nmazz",
    storageBucket: "f1-shop---com19765-nmazz.appspot.com",
    messagingSenderId: "760383664234",
    appId: "1:760383664234:web:c1b23c080007116b50da13"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}