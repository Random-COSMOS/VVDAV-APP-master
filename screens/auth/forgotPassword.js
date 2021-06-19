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
import resetPassword from "../../components/auth/resetPassword";

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState("");

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
                <TouchableOpacity
                    style={loginStyles.loginBtn}
                    onPress={() => resetPassword(email, navigation)}
                >
                    <Text style={loginStyles.loginText}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
