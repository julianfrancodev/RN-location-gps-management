import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';


interface Props { 
    markers?: Marker[],

}

function Map(props: Props) {
    const { markers } = props


    useEffect(() => {
        Geolocation.getCurrentPosition(info => console.log(info), 
        (err)=> console.log(err),
        {
            enableHighAccuracy: true
        }
        );
    }, [])
    

    return (
        <>
            <MapView
                style={styles.map}
                showsUserLocation
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >

                {/* <Marker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                    longitude: -122.4324,
                    }}
                    title={'Marcador 1'}
                    description={'Marcador 1 description'}
                /> */}







            </MapView>
        </>
    )
}

export default Map;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
