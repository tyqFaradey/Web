import { useEffect, useState } from "react";
import { Circle, MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ChangeMapView({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);

  return null;
}

export default function Map({ continent }) {
  const fallBack_continents = {
    Europe: {
      center: [54.526, 15.2551],
    },
    Asia: {
      center: [34.0479, 100.6197],
    },
    America: {
      center: [37.0902, -95.7129],
    },
    Africa: {
      center: [1.6508, 17.6791],
    },
  };
  const fallback = fallBack_continents[continent];
  const [center, setCenter] = useState(fallback.center);

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${continent}&format=json`,
        );

        if (!res.ok) throw new Error("network error");

        const data = await res.json();

        if (data.length > 0) {
          setCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          return;
        }
      } catch (e) {
        setCenter(fallback.center);
      }
    }

    fetchCoordinates();
  }, [continent]);

  return (
    <MapContainer
      center={center}
      zoom={4}
      style={{
        height: "500px",
        width: "100%",
        border: 6,
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle
        center={center}
        radius={1500000} // 50 км
        pathOptions={{
          color: "#ff6b6b",
          fillColor: "#ff6b6b",
          fillOpacity: 0.2,
        }}
      />

      <ChangeMapView center={center} zoom={3} />
    </MapContainer>
  );
}
