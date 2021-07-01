import React from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking, Image, StatusBar } from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{

    constructor(){
        super()
        this.state={
            apod:{}
        }
    }

    getApod = () =>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=fqh8uiIIRbkRaXKLQi6ij9uHMHShBjEgy7rWShjE")
        .then (response => {
            this.setState({apod: response})
        })
        .catch( error => {
                Alert.alert(error.message)
            }
        )
    }


    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.driodSafeArea} />
                <ImageBackground
                source={require("../assets/stars.gif")} style={styles.backgroundImage} >
                    
                    <Text style={styles.routeText} >Astronomy picture of the the day </Text>
                    <Text style={styles.titleText} >{this.state.apod.title}</Text>

                    <TouchableOpacity style={styles.listContainer} 
                        onPress={()=>{
                            Linking.openURL(this.state.apod.url)
                            .catch(err =>{
                                console.error("Couldn't load the page", err)
                            })
                        }}
                    >
                        <Image source={require("../assets/play-video.png")} style={{width:100, height:100 }} />

                    </TouchableOpacity>

                    <Text style={styles.explanation} > {this.state.apod.explanation} </Text>

                </ImageBackground>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    driodSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems:'center'
    },

    routeText: {
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    },

    titleText: {
        fontSize:40,
        fontWeight:'bold',
        color:'white'

    },

    listContainer: {
        marginTop:50,
        bottom:-200,
    },

    explanation: {
        color:'white',
        fontSize:15
    },
})