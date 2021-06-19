import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StarMap extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Star Map
                </Text>
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
})