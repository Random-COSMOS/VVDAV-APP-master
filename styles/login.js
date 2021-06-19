import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    svgCurve: {
        position: "absolute",
        top: "-10%",
        height: "30%",
        // backgroundColor: "red",
        width: Dimensions.get("window").width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },

    touch: {
        height: "100%",
        width: "100%",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#0099ff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        // alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#0099ff",
    },

    signupBtn: {
        width: "80%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: "white",
    },
    signupText: {
        color: "black",
    },
});
