import Geolocation from "@react-native-community/geolocation";
import { useEffect, useRef, useState } from "react";
import { Location } from '../interfaces/appInterfaces';


export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);

    const [initialPosition, setInitialPosition] = useState<Location>();

    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const [routeLines, setRouteLines] = useState<Location[]>([]);

    const watchId = useRef<number>();

    const isMounted = useRef(true);


    useEffect(() => {
      isMounted.current = true;
    
      return () => {
        isMounted.current = false;
      }
    }, [])
    


    useEffect(() => {

        getCurrentLocation()
            .then(location => {
                setInitialPosition(location);
                setUserLocation(location);
                setHasLocation(true);
                setRouteLines(routes => [...routes, location]);

            });
    }, []);

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(info => {
                resolve({
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude
                })
            },
                (err) => reject({ err }),
                {
                    enableHighAccuracy: true
                }
            );
        })
    }


    const followUserLocation = () => {
       watchId.current =  Geolocation.watchPosition(({ coords }) => {

        const location: Location = {
            latitude: coords.latitude,
            longitude: coords.longitude
        }

            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude
            });

            setRouteLines(routes => [...routes, location]);


        }, (err) => console.log(err), { enableHighAccuracy: true, distanceFilter: 10 });

    }

    const stopFollowInUserLocation =()=>{
        if(watchId.current)Geolocation.clearWatch(watchId.current);
    }

    return {

        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowInUserLocation,
        routeLines

    }

}