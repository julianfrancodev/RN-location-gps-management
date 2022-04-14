import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';



interface Props { 
    markers?: Marker[],

}

function Map(props: Props) {
    const { markers } = props;

    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    const [showPolyline, setshowPolyline] = useState(true);

    const {hasLocation, routeLines,initialPosition, getCurrentLocation, followUserLocation, userLocation, stopFollowInUserLocation} = useLocation();

    useEffect(() => {
        followUserLocation();

        return ()=>{
          stopFollowInUserLocation();

        }
    }, [])


    useEffect(() => {

        if(following.current) return;

        const {longitude,latitude} = userLocation;

        mapViewRef.current?.animateCamera({
            center: {
                latitude,
                longitude
            }
        });
      
    }, [userLocation])
    
    


    const centerPosition = async ()=>{

        const location = await getCurrentLocation();

        following.current = true;

        mapViewRef.current?.animateCamera({
            center: {
                latitude: location.latitude,
                longitude: location.longitude
            }
        });
    }

    if(!hasLocation){
        return <LoadingScreen/>
    }

    return (
        <>
            <MapView
                ref={(el)=>mapViewRef.current = el!}
                style={styles.map}
                showsUserLocation
                onTouchStart={()=> following.current = false}
                region={{
                    latitude: initialPosition?.latitude!,
                    longitude: initialPosition?.longitude!,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >

                {
                    showPolyline && (
                        <Polyline
                        coordinates={routeLines}
                        strokeColor="black"
                        strokeWidth={3}
                        />
                    )
                }

               
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

            <Fab
                iconName='plus'
                onPress={()=>centerPosition()}
                style={{
                    position:'absolute',
                    bottom: 20,
                    right: 20
                }}
            />
            <Fab
                iconName='pencil'
                onPress={()=>setshowPolyline(value => !value)}
                style={{
                    position:'absolute',
                    bottom: 90,
                    right: 20
                }}
            />
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
