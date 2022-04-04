import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, AppState } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';

interface Props {}

function PermissionsScreen(props: Props) {
    
    const {} = props;

    const {permissions, askLocationPermission, checkLocationPermission } = useContext(PermissionsContext)

   


    return (
        <View style={styles.container}>
            <Text>
                Permissions Screen
            </Text>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> askLocationPermission()}
            >
                <View style={styles.button}>
                <Text style={styles.textButton}>
                    Permiso
                </Text>
                </View>
               
            </TouchableOpacity>

            <Text>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
    )
}

export default PermissionsScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#ff6961',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 7,
        marginTop: 20
    },
    textButton:{
        color: 'white'
    }
})
