import Firebase from "../../firebase/firebaseConfigs";
import toast from "../toast";
const resetPassword = (email, navigation) => {
    if (email !== "" && email.includes("@") && email.includes(".")) {
        try {
            Firebase.auth().sendPasswordResetEmail(email);
            toast(`Password Reset Link Sent To ${email}`);
            navigation.navigate("Login");
        } catch (error) {
            toast(error.message);
        }
    } else {
        toast("Enter Email");
    }
};

export default resetPassword;
