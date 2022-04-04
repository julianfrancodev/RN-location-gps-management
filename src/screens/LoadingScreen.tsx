import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';

interface Props {}

function LoadingScreen(props: Props) {
    const {} = props

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
           <ActivityIndicator
           size={50}
           color="black"
           />
        </View>
    )
}

export default LoadingScreen
