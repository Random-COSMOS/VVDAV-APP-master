import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Button, Image} from 'react-native'

const Mantra = ({navigation}) =>  {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableHighlight onPress={() => navigation.navigate("Main")} underlayColor="none">
                    <Image style={styles.image} source={require('../assets/left-arrow.svg')}/>
                </TouchableHighlight>
                <Text style={styles.topic}>Mantra</Text>
            </View>
            
            <View style={styles.mantraNav}>

                <View style={styles.row}>
                    <TouchableHighlight onPress={() => navigation.navigate("Mantra1")}>
                        <View style={styles.mantra}>
                            <Text>Mantra 1</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate("Mantra2")}>
                        <View style={styles.mantra}>
                            <Text>Mantra 2</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.row}>
                    <TouchableHighlight onPress={() => navigation.navigate("Mantra3")}>
                        <View style={styles.mantra}>
                            <Text>Mantra 3</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate("Mantra4")}>
                        <View style={styles.mantra}>
                            <Text>Mantra 4</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.row}>
                    <TouchableHighlight onPress={() => navigation.navigate("Mantra5")}>
                        <View style={styles.mantra}>
                            <Text>Mantra 5</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#fff",
        elevation: 10,
        shadowOpacity: 0.2,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    topic: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10
    },
    image: {
        width: 25,
        height: 30
    },
    mantraNav: {
        
    },
    mantra: {
        width: 180,
        height: 180,
        backgroundColor: "#ADD8E6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    }
})

export default Mantra;
