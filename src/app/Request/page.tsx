"use client"
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'; 

function page() {
    const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: 22.253385,
  lng: 84.906261
};
   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC__GOOGLE_MAPS_API_KEY || '',
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
}, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default page

