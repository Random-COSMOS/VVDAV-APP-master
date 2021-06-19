import React,{useState} from 'react';
import {View , Text , StyleSheet, SafeAreaView,Image , FlatList} from 'react-native';
export default function ChairmenScreen(){
    const [line , setline] = useState([
        {name : "डॉ एनके उबेरॉय एक प्रख्यात शिक्षाविद्," ,id:'1'},
        {name : "हंस राज कॉलेज, दिल्ली के पूर्व प्रिंसिपल," ,id:"2"},
        {name: "सेंटर फॉर प्रोफेशनल डेवलपमेंट इन हायर",id:'3'} ,
        {name : " एजुकेशन, दिल्ली यूनिवर्सिटी के पूर्व निदेशक,",id:"4"},
        {name : "पूर्व में डीन और इंस्टीट्यूट ऑफ मैनेजमेंट",id:'5'},
        {name : "टेक्नोलॉजी, गाजियाबाद के संयुक्त निदेशक",id:'6'} ,
        {name : "और विभिन्न सामाजिकऔर शैक्षिक संस्थान ", id:"7"},
        {name : "से जुड़े हुए हैं।",id:'8'}
    ]);
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'lightgreen',width:900,borderwidth:7,borderColor:"black",alignSelf:"center"}}>
                <View >
                    <Image style={styles.unview} source={require("../../assets/Image/i4.jpg")}/>
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