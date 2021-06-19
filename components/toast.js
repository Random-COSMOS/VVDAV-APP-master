import { ToastAndroid } from "react-native";

export default function toast(str) {
    ToastAndroid.showWithGravity(str, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
}
