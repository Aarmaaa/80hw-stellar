import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView, Platform, ImageBackground,Image } from 'react-native';

export default class HomeScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style = {styles.safeArea}>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.bg}>
                        
                        <Image
                        source={require("../assets/main-icon.png")}
                        style={{width:300, height:300}}
                        />

                        <View style = {styles.titleBar} >
                            <Text style = {styles.titleText}>Stellar App</Text>
                        </View>

                        <TouchableOpacity 
                        style = {styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate("StarMap")
                        }}
                        >
                            <Text style = {styles.text}>Stars Map</Text>
                            <Image source={require("../assets/star_map.png")} style={styles.iconImage} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                        style = {styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate("DailyPic")
                        }}
                        >
                            <Text style = {styles.text}>Daily Pics</Text>
                            <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage} />
                        </TouchableOpacity>

                        <TouchableOpacity
                        style = {styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate("SpaceCraft")
                        }}
                        >
                            <Image source={require("../assets/space_crafts.png")} style={styles.iconImage} />
                            <Text style = {styles.text}>Space Crafts</Text>
                        </TouchableOpacity>
                   
                    </ImageBackground>
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
  },
  bg: {
     flex: 1,
     resizeMode: 'cover',
     alignItems:'center'
  },
  safeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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
  button:{
      flex: 0.25,
      marginLeft:50,
      marginTop:30,
      marginRight:50,
      width: 300,
      backgroundColor:'rgba(225, 25, 125, 0.5)',
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
  },
  text:{
      fontSize:45,
      fontWeight:'bold',
      color:'black',
      marginTop:30,
      paddingLeft:5,
  },
  iconImage: {
      position: 'absolute',
      height: 90,
      width: 70,
      right: 20,
      top: -25,
      resizeMode: 'contain'
  },
  knowMore: {
    paddingLeft: 20,
    color: 'red',
    fontSize: 20
  },
  bgdigit:{
      position:'absolute',
      color:"rgba(180, 180, 180, 0.3)",
      fontSize:150,
      right:10,
  }
 
})