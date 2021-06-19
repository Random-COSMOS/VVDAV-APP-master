import Firebase from "../../firebase/firebaseConfigs";
import toast from "../toast";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        toast(e.message);
    }
};

const handleLogin = (email, password, navigation) => {
    Keyboard.dismiss();
    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            if (isEmailVerified()) {
                storeData("loggedIn", "true");
                storeData("userCredentials", JSON.stringify(userCredentials));
                toast("Logged In");
                navigation.navigate("Home");
            } else {
                toast("Verify Email");
            }
        })
        .catch(error => {
            toast(error.message);
        });
};

const isEmailVerified = () => {
    return Firebase.auth().currentUser.emailVerified;
};
export default handleLogin;
