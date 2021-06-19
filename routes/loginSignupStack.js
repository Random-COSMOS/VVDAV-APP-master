import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import ForgotPassword from "../screens/auth/forgotPassword";
const screens = {
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp,
    },
    ForgotPassword: {
        screen: ForgotPassword,
    },
};

const loginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
    },
});

export default loginStack;
