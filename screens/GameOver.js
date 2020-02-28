import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const GameOver = props => {
    return (
        <View>
            <Text>Game Over with {props.tries} tries!</Text>    
        </View>
    )
}


const styles = StyleSheet.create({
    
});

export default  GameOver;
