"use client";
import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function MapPage() {  // Renamed 'page' to 'MapPage'
  const containerStyle = {
    width: "100%",
    height: "90vh",
  };

  const center = {
    lat: 22.253385,
    lng: 84.906261,
  };

  // Loading the Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // State to store the map instance
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Callback for when the map is loaded
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]  // Added 'center' to the dependency array
  );

  // Callback for when the map is unmounted
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* You can add markers or other components here */ }
      <></>
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default MapPage;  // Updated the export to match the component name
