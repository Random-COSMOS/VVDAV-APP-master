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
import handleSignUp from "../../components/auth/handleSignup";

export default function SignUp({ navigation }) {
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
                <Text style={loginStyles.forgot_button}></Text>
                {/* Empty Text To Main Margin */}
                <TouchableOpacity
                    style={loginStyles.loginBtn}
                    onPress={() => handleSignUp(email, password, navigation)}
                >
                    <Text style={loginStyles.loginText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={loginStyles.signupBtn}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={loginStyles.signupText}>Login</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
