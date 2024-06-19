"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const customIcon = new L.Icon({
  iconUrl: MarkerIcon.src,
  iconRetinaUrl: MarkerIcon.src,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
  shadowUrl: MarkerShadow.src,
  shadowSize: [41, 41],
});

export default function InstituteMap() {
  useEffect(() => {
    // Ensure leaflet CSS is loaded dynamically if needed
    import("leaflet/dist/leaflet.css");
  }, []);

  return (
    <div className="overflow-hidden h-[400px] max-w-full rounded-lg">
      <MapContainer
        center={[31.06984, 31.388921]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[31.06984, 31.388921]} icon={customIcon}>
          <Popup>
            معهد الدلتا العالي
            <br />
            للنظم والمعلومات الإدارية والمحاسبيه
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};


