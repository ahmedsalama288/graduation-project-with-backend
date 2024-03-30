"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerIcon from "../../../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function InstituteMap() {
  return (
    <div className=" overflow-hidden h-[400px] max-w-full rounded-lg">
      <MapContainer
        center={[31.06984, 31.388921]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[31.06984, 31.388921]}
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>
            معهد الدلتا العالي
            <br />
            للنظم والمعلومات الإدارية والمحاسبيه
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
