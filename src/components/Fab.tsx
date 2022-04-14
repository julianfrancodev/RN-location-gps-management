import React from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

interface Props {
    iconName: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}

function Fab(props: Props) {
    const { iconName, onPress, style } = props

    return (
        <View style={{ ...style as any }}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Icon
                    name={iconName}
                    color={'white'}
                    size={35}
                />
            </TouchableOpacity>

        </View>
    )
}

export default Fab;


const styles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})
