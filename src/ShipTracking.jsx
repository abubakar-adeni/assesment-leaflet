import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./osm-providers";
import L from "leaflet";
import dockData from "./dock.json";
import shipsData from "./ship.json";

const shipIcon = new L.Icon({
  iconUrl: require("./assets/boat.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const dockIcon = new L.Icon({
  iconUrl: require("./assets/dock.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const ShipTrackikng = () => {
  const [center, setCenter] = useState({ lat: -5.9297061434576745, lng: 105.99896674030379 });  
  const ZOOM_LEVEL = 14;

  return (
    <div className="row">
      <div className="col text-center">
        <div className="col">
          <MapContainer center={center} zoom={ZOOM_LEVEL}>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
            {shipsData.map((ship) => (
              <Marker key={ship.id} position={[ship.lat, ship.lng]} icon={shipIcon}>
                <Popup>
                  <div>
                    <h3>{ship.name}</h3>
                    <p>Location: {ship.lat}, {ship.lng}</p>
                    <p>Capacity: {ship.capacity}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            {dockData.map((dock) => (
              <Marker key={dock.id} position={[dock.lat, dock.lng]} icon={dockIcon}>
                <Popup>
                  <div>
                    <h3>{dock.name}</h3>
                    <p>Capacity: {dock.capacity}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ShipTrackikng;
