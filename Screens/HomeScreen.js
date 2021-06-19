import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{

    render(){
        return(
            <View>
                <View style={styles.container} >
                    <Text style = {{fontWeight: 'bold', fontSize: 40}}>Stellar</Text>
                </View>

                <View style={styles.screen} >
                    <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate("StarMap")
                    }}
                    >
                        <Text style={{fontSize:25}} >Star Map</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("DailyPic")
                    }}
                    >
                        <Text style={{fontSize:25}} >Daily Pic</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("SpaceCraft")
                    }}
                    >
                        <Text style={{fontSize:25}} >Space Craft</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      marginTop:70,
  },
  screen:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:200
  } 
})