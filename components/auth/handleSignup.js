import Firebase from "../../firebase/firebaseConfigs";
import toast from "../toast";

let emailID;
const handleSignUp = (email, password, navigation) => {
    emailID = email;
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            sendEmailVerification();
            navigation.navigate("Login");
        })
        .catch(error => toast(error.message));
};

const sendEmailVerification = () => {
    Firebase.auth()
        .currentUser.sendEmailVerification()
        .then(() => {
            toast(`Email Verification Link Sent To ${emailID}`);
        })
        .catch(e => {
            toast(e.message);
        });
};
export default handleSignUp;
