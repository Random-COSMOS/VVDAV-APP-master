import React, { useState } from "react";
import Navigator from "./routes/drawer";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import toast from "./components/toast";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import mainScreen from "./screens/main";
import aryaScreen from "./screens/aryasamaj"
import founderScreen from "./screens/imp-people/founder"
import chairmanScreen from "./screens/imp-people/chairman"
import viceChairmanScreen from "./screens/imp-people/vicechairmen"
import mantraScreen from "./screens/mantra"
import mantraPage1 from "./screens/mantra-pages/mantra1"
import mantraPage2 from "./screens/mantra-pages/mantra2"
import mantraPage3 from "./screens/mantra-pages/mantra3"
import mantraPage4 from "./screens/mantra-pages/mantra4"
import mantraPage5 from "./screens/mantra-pages/mantra5"
// import suryaNamaskarScreen from "./screens/suryaNamaskar";

const retreiveData = async (f) => {
  try {
    const val = await AsyncStorage.getItem("loggedIn");
    if (val === "true") {
      f(1);
    } else {
      f(0);
    }
  } catch (error) {
    toast(error.message);
  }
};

const Stack = createStackNavigator();
export default function App() {
  const [loggedIn, setLoggedIn] = useState(-1);

  if (loggedIn === 1) {
    return(
      <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={mainScreen} options={{headerShown:false}}/>
                    {/* <Stack.Screen name="SuryaNamaskar" component={suryaNamaskarScreen} options={{headerTintColor: '#00f'}}/> */}
                    <Stack.Screen name="Arya" component={aryaScreen} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Founder" component={founderScreen} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Chairman" component={chairmanScreen} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Vice-Chairman" component={viceChairmanScreen} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Mantra" component={mantraScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Mantra1" component={mantraPage1} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Mantra2" component={mantraPage2} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Mantra3" component={mantraPage3} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Mantra4" component={mantraPage4} options={{headerTintColor: '#00f'}}/>
                    <Stack.Screen name="Mantra5" component={mantraPage5} options={{headerTintColor: '#00f'}}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
  } else if (loggedIn === -1) {
    return (
      <AppLoading
        startAsync={() => {
          retreiveData(setLoggedIn);
        }}
        onFinish={() => {
          console.log(loggedIn); // It Never Happens
        }}
        onError={(e) => {
          toast(e.message);
        }}
      />
    );
  } else {
    return <Navigator />;
  }
}
