import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, ImageBackground, TextInput } from 'react-native';
import WebView from 'react-native-webview';

export default class HomeScreen extends React.Component{

    constructor(){
        super()
        this.state={
            latitude: {},
            longitude: {},
        }
    }

    render(){
        const {longitude, latitude} = this.state;
        const path = "https://virtualsky.lco.global/embed/index.html?longitude="+{longitude}+"&latitude="+{latitude}+
        "&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"

        return(
            <View style={styles.container}>
                <SafeAreaView style = {styles.safeArea}>

                        <View style = {styles.titleBar} >
                            <Text style = {styles.titleText}> ⭐ Star ⭐ Map ⭐ </Text>
                        </View>

                        <TextInput
                            style={{      
                                width: 210,
                                height: 50,
                                borderWidth: 3,
                                fontSize: 20,
                                borderRadius:30,
                                color:"white", 
                                marginLeft:70
                            }}
                            placeholder="   Enter your Longitude"
                            placeholderTextColor="white"
                            keyboardType='numeric'
                            onChangeText={(text)=>{
                                this.setState({
                                    longitude: text
                                })
                            }}
                        />

                        <TextInput
                            style={{      
                                width: 210,
                                height: 50,
                                borderWidth: 3,
                                fontSize: 20,
                                borderRadius:30,
                                color:"white",
                                marginTop:20,
                                marginLeft:70
                            }}
                            placeholder="    Enter your Latitude"
                            placeholderTextColor="white"
                            keyboardType='numeric'
                            onChangeText={(text)=>{
                                this.setState({
                                    latitude: text
                                })
                            }}
                        />

                        <WebView
                            scalesPageToFit={true}
                            source={{uri: path}}
                            style={{marginTop: 20,}}
                        />
                   
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor:'purple'
  },
  safeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleBar:{
      flex:0.15,
      justifyContent:'center',
      alignItems:'center',
  },
  titleText:{
      fontSize:40,
      fontWeight:'bold',
      color:'white'
  }, 
})