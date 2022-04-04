import React from 'react'
import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';

interface Props {}

function HomeScreen(props: Props) {
    const {} = props

    return (
        <View style={{flex: 1}}>
            <Map/>
        </View>
    )
}

export default HomeScreen;


