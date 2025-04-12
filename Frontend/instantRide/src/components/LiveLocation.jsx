import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveLocation = () => {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState("Locating...");

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });

        // Call reverse geocoding API
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
          );

          const formatted = response.data.results[0]?.formatted;
          setAddress(formatted || "Unable to fetch address");
        } catch (error) {
          setAddress("Error fetching address");
          console.error(error);
        }
      },
      (error) => {
        console.error("Location error:", error);
        setAddress("Permission denied or location unavailable");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );

    // Cleanup on unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md max-w-md mx-auto mt-5">
      <h2 className="text-xl font-bold mb-2">Your Live Location</h2>
      {/* <p className="text-sm text-gray-600 mb-1">Latitude: {coords.lat}</p>
      <p className="text-sm text-gray-600 mb-1">Longitude: {coords.lng}</p>
      <p className="text-md font-medium text-blue-700 mt-2">{address}</p> */}
    </div>
  );
};

export default LiveLocation;
