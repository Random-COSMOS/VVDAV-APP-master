import React, {useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView,Image, TouchableHighlight, TouchableOpacity, FlatList, ScrollView, TouchableWithoutFeedback} from 'react-native';
import HeadOne from '../components/header';

export default function AryaSamaj({navigation}) {
  const [a,seta] = useState("दयानंद सरस्वती");
  const [b,setb] = useState("डॉ. एन.के. उबेरॉय");
  const [c,setc] = useState("श्री एम. एल. सेखरी");
  return (
    <View style={styles.container}>
        <HeadOne />
        <SafeAreaView>
            <TouchableHighlight onPress={() => navigation.navigate("Founder")} underlayColor="none">
                <View style={styles.cirone}>
                    <Image style={styles.i} source={require("../assets/Image/i1.jpg")}/>
                    <View style={styles.con}>
                        <Text style={styles.a}>{a}</Text>
                        <Text style={styles.a}>Founder of Arya Samaj</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate("Chairman")} underlayColor="none">
                <View style={styles.cirone}>
                    <Image style={styles.i} source={require("../assets/Image/i4.jpg")}/>
                    <View style={styles.con}>
                        <Text style={styles.a}>{b}</Text>
                        <Text style={styles.a}>Chairman DAV</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate("Vice-Chairman")} underlayColor="none">
                <View style={styles.cirone}> 
                    <Image style={styles.i} source={require("../assets/Image/i3.jpg")}/>
                    <View style={styles.con}>
                        <Text style={styles.a}>{c}</Text>
                        <Text style={styles.a}>Vice Chairman DAV</Text>
                    </View>
                </View>
                </TouchableHighlight>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  con:{
      justifyContent:"center",
      marginLeft:5
  },
  cirone : {
    alignSelf:"center",
    width:"95%",
    height:"24%",
    backgroundColor: "rgb(233, 233, 233)",
    marginTop: 30,
    borderWidth:5,
    borderColor:"rgb(207, 207, 207)",
    borderRadius:10,
    justifyContent:"center",
    padding:10,
    minWidth: 20,
    marginTop:50,
    flexDirection:"row"
  },
  i:{
    marginTop:5,
    width: 150,
    height:150,
    borderRadius: 100,
    borderWidth:4,
    borderColor:"orange",
    alignSelf: "center",
  },
  a:{
    marginTop:2,
    fontSize:20,
    textAlign:"center",
    alignSelf:"center",
    color:"blue"
  }
});
