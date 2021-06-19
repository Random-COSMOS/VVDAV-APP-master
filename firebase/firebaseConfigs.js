import firebase from "firebase";
import {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
} from "react-native-dotenv";
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId,
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
// const FirebaseStorage = firebase.storage();
// export default { Firebase, storage };
export default Firebase;
