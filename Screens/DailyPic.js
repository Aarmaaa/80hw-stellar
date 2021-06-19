import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Daily Pic
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