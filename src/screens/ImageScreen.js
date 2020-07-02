import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title='Forest' imageSourse={require('../../assets/forest.jpg')} score={6}/>
            <ImageDetail title='Beach' imageSourse={require('../../assets/beach.jpg')} score={7}/>
            <ImageDetail title='Mountain' imageSourse={require('../../assets/mountain.jpg')} score={9}/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;