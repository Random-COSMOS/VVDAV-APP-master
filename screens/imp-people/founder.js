import React,{useState} from 'react';
import {Text,View, SafeAreaView, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
export default function Founder(){
    const [a,seta] = useState('दयानंद सरस्वती');
    const [line , setline] = useState([
        {name :"स्वामी दयानंद सरस्वती का जन्म 12",id:'1'},
        {name :"फरवरी 1824 को टंकारा गुजरात में ",id:'2'},
        {name :"हुआ था। 30 अक्टूबर 1883 को अजमेर",id:'3'},
        {name :"राजस्थान में 59 वर्ष की आयु में उनका ",id:'4'},
        {name :"निधन हो गया। वे आर्य समाज के संस्थापक ",id:'5'},
        {name :"थे। वे वैदिक के एक महान दार्शनिक थे। उनके",id:'6'},
        {name :"गुरु का नाम स्वामी विरजानंद था",id:'7'},
    ]);
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'lightgreen',width:900,borderwidth:7,borderColor:"black",alignSelf:"center"}}>
                <View >
                    <Image style={styles.unview} source={require("../../assets/Image/i1.jpg")}/>
                </View>
                <View style={{marginTop:10}}>
                    <FlatList data={line} renderItem ={( {item} ) => (
                        <Text style={styles.sentence}>{item.name}</Text>
                    )} keyExtractor={item => item.id}/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"lightblue",
        justifyContent:"center",
    },
    unview:{
        marginTop:53,
        width: 300,
        height:300,
        borderWidth:10,
        borderColor:"black",
        justifyContent:'center',
        alignSelf:"center",
        borderRadius: 1000
    },
    sentence:{
        marginTop: 13,
        alignSelf:"center",
        fontSize:25,
        color: "rgb(122, 122, 218)"
    }
});