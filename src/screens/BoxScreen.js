import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.parentStyle}>
            <View style={styles.view1Style}></View>
            <View style={styles.view2Style}></View>
            <View style={styles.view3Style}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 100,
        alignItems: 'stretch',
        justifyContent: 'space-between'
        //flex: 1
    },
    view1Style: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    view2Style: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //top: 50
        alignSelf: 'flex-end'
    },
    view3Style: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
    
});

export default BoxScreen;