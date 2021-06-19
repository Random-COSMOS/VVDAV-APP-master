import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import WavyHeader from "../../components/wavyHeader";
import loginStyles from "../../styles/login";
import handleLogin from "../../components/auth/handleLogin";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <TouchableWithoutFeedback
            style={loginStyles.touch}
            onPress={() => Keyboard.dismiss()}
        >
            <View style={loginStyles.container}>
                <WavyHeader customStyles={loginStyles.svgCurve} />
                <Image
                    style={loginStyles.image}
                    source={require("../../assets/logo.png")}
                />
                <StatusBar style="auto" />
                <View style={loginStyles.inputView}>
                    <TextInput
                        style={loginStyles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={loginStyles.inputView}>
                    <TextInput
                        style={loginStyles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPassword")}
                >
                    <Text style={loginStyles.forgot_button}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={loginStyles.loginBtn}
                    onPress={() => handleLogin(email, password, navigation)}
                >
                    <Text style={loginStyles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={loginStyles.signupBtn}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={loginStyles.signupText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
