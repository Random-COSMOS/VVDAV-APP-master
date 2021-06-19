import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, ActivityIndicator } from "react-native";

const quoteApi = "https://type.fit/api/quotes"

export default function Main({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(quoteApi)
        .then(res => res.json())
        .then(json => {
            const rndInt = Math.floor(Math.random() * 1640) + 1
            const quoteDict = json[rndInt]
            setData(quoteDict)
            console.log(quoteDict)
        })
        .catch(err => alert(err))
        .finally(setLoading(false))
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <View style={styles.quote}>
                    <Text>{data.text}</Text>    
                </View>
            }

            <Text style={styles.text}>Main Screen</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Arys Samaj" onPress={() => navigation.navigate("Arya")}/>
                <Button style={styles.button} title="Surya Namaskar" onPress={() => navigation.navigate("SuryaNamaskar")}/>
                <Button style={styles.button} title="Mantra" onPress={() => navigation.navigate("Mantra")}/>
            </View>
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create({
    quote: {
        marginBottom: 50,
        textAlign: "center",
        color: "#f00"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 120
    }
});
