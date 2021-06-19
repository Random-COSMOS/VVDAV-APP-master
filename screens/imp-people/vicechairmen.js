import React,{useState} from 'react';
import {View , Text , StyleSheet, SafeAreaView , Image ,FlatList} from 'react-native';
export default function ViceChairmenScreen(){
    const [line , setline] = useState([
        {name : "श्री एम एल सेखरी एक शिक्षाविद्," ,id:'1'},
        {name : "47 वर्षों की मेधावी सेवा प्रदान करने के , सेंटर " ,id:"2"},
        {name: " बाद, डीएवी कॉलेज प्रबंध समिति,",id:'3'} ,
        {name : "नई दिल्ली के आयोजन सचिव के रूप में सेवानिवृत्त हुए",id:"4"},
        {name : "वह डीएवी संगठन के मानद सलाहकार भी रह चुके",id:'5'},
        {name : " वह पहले डीएवी कॉलेज जालंधर में लेक्चरर थे",id:'6'} ,
        {name : " और बाद में विभिन्न डीएवी कॉलेजों के प्रिंसिपल थे।", id:"7"},
        {name : "और बाद में विभिन्न डीएवी कॉलेजों के प्रिंसिपल थे।",id:"8"},
        {name : "वह तीन बार पंजाब विश्वविद्यालय की सीनेट के लिए चुने", id:"9"},
        {name : "गए और इसके सिंडिक बने रहे। वे कुरुक्षेत्र विश्वविद्यालय ",id:"10"},
        {name : " के न्यायालय के सदस्य थे। उन्होंने भारत और विदेशों ",id:"11"},
        {name : " में शैक्षिक दौरों पर यात्रा की है।",id:"12"}

    ]);
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'lightgreen',width:900,borderwidth:7,borderColor:"black",alignSelf:"center"}}>
                <View >
                    <Image style={styles.unview} source={require("../../assets/Image/i3.jpg")}/>
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
        marginTop: 8,
        alignSelf:"center",
        fontSize:20,
        color: "rgb(122, 122, 218)"
    }
});