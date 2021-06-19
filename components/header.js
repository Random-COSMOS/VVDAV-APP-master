import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView,Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
export default function HeadOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.size}>आर्य समाज</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent:"center",
    
  },
  size :{
      marginTop:20,
      fontSize:50,
      alignSelf:"center",
      color: "rgb(47, 47, 251)"
  }
});
