import React, { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const API_KEY = "AIzaSyCdUKj-j6A5yysU6wwkSfZF-2y-77qXofk";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629,
};

const RideBooking = () => {
  const pickupRef = useRef(null);
  const dropRef = useRef(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [directions, setDirections] = useState(null);
  const [carPosition, setCarPosition] = useState(null);
  const [routePath, setRoutePath] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const simulateCarMovement = (path) => {
    let index = 0;

    // Clear any previous interval
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      if (index >= path.length) {
        clearInterval(id);
        return;
      }

      setCarPosition(path[index]);
      index++;
    }, 500);

    setIntervalId(id);
  };

  const handleBookRide = () => {
    const originPlace = pickupRef.current?.getPlace();
    const destinationPlace = dropRef.current?.getPlace();

    if (!originPlace || !destinationPlace) {
      alert("Please select both pickup and drop locations.");
      return;
    }

    const origin = originPlace.geometry.location;
    const destination = destinationPlace.geometry.location;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          setMapCenter(origin);

          const path = result.routes[0].overview_path.map((latLng) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));

          setRoutePath(path);
          simulateCarMovement(path);
        } else {
          alert("Failed to get directions: " + status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
      <div style={{ padding: "20px" }}>
        <h2>Uber-Like Ride Booking</h2>
        <div style={{ marginBottom: 10 }}>
          <Autocomplete onLoad={(ref) => (pickupRef.current = ref)}>
            <input
              type="text"
              placeholder="Pickup Location"
              style={{ padding: 10, width: 300, marginRight: 10 }}
            />
          </Autocomplete>
          <Autocomplete onLoad={(ref) => (dropRef.current = ref)}>
            <input
              type="text"
              placeholder="Drop Location"
              style={{ padding: 10, width: 300 }}
            />
          </Autocomplete>
        </div>
        <button
          onClick={handleBookRide}
          style={{ padding: "10px 20px", marginBottom: 20 }}
        >
          Book Ride
        </button>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={14}
        >
          {directions && <DirectionsRenderer directions={directions} />}
          {carPosition && (
            <Marker
              position={carPosition}
              icon={{
                url: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // car icon
                scaledSize: new window.google.maps.Size(40, 40),
              }}
            />
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default RideBooking;
