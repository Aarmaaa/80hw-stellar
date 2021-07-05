import React from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,Image, StatusBar, Platform, FlatList } from 'react-native';
import axios from 'axios';

export default class SpaceCraft extends React.Component{

    constructor(){
        super()
        this.state={
            ship:[]
        }
    }

    getData=() => {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(respond =>{
            this.setState({ship: respond.data.results })
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    renderItem = ({item})=>{
        return(
            <View style={{borderWidth:1, justifyContent:'center', alignItems:'center', marginBottom:10, elevation:10}} >
                <Image source={{uri: item.agency.image_url }}
                 style={{width:"100%", height:200, marginTop:10, marginBottom:15, marginRight:10}} />
                 <Text style={{fontWeight:'bold', fontSize:20 }} > {item.name} </Text>
                 <Text style={{color:'#696969'}} > {item.agency.name} </Text>
                 <Text> DESCRIPTION </Text>
                 <Text style={{color:"#A9A9A9", marginLeft:10, marginRight:10}} > {item.agency.descriotion} </Text>
            </View>
        )
    }

    keyExtractor=(item, index) => {
        index.toString();
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.25}} >
                    <Text>Space Craft</Text>  
                </View>
                <View style={{flex:0.75}} >
                    <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.state.ship}
                    renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        
      },
})