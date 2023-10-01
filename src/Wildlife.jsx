import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from "react-leaflet";
import L from "leaflet";
import { useRef } from "react";
import { EditControl } from "react-leaflet-draw";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import bird1 from "./assets/bird1.png";
import bird2 from "./assets/bird2.png";
import bird3 from "./assets/bird3.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const birdData = [
  {
    name: "Blue Jay",
    species: "Cyanocitta cristata",
    image_url: bird1,
    coordinates: [-1.4632456835984269, 120.1381850246917],
  },
  {
    name: "Robin",
    species: "Turdus migratorius",
    image_url: bird2,
    coordinates: [-1.4715027597782855, 120.18258933998719],
  },
  {
    name: "Sparrow",
    species: "Passeridae",
    image_url: bird3,
    coordinates: [-1.5615055209627329, 120.05315944839384],
  },
];

const Wildlife = () => {
  const [center, setCenter] = useState({
    lat: -1.4632456835984269,
    lng: 120.1381850246917,
  });
  const mapRef = useRef();
  const ZOOM_LEVEL = 11;
  const _created = (e) => console.log(e);
  const [legendVisible, setLegendVisible] = useState(false);

  const toggleLegend = () => {
    setLegendVisible(!legendVisible);
  };

  return (
    <div className="row">
      <div className="col text-center">
        <div className="col">
          <button style={{ display: 'flex', justifyContent: 'flex-start', margin: '10px'}} onClick={toggleLegend}>
            Legend
          </button>
          {legendVisible && (
            <div className="legend">
              {birdData.map((bird, index) => (
                <div key={index} className="legend-item">
                  <img
                    src={bird.image_url}
                    alt={bird.name}
                    width="20"
                    height="20"
                  />
                  <span>{bird.name}</span>
                  <span>({bird.species})</span>
                </div>
              ))}
            </div>
          )}
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={_created}
                draw={{}}
              />
            </FeatureGroup>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
            {birdData.map((bird, index) => (
              <Marker
                key={index}
                position={bird.coordinates}
                icon={
                  new L.Icon({
                    iconUrl: bird.image_url,
                    iconSize: [40, 40],
                    iconAnchor: [17, 46],
                    popupAnchor: [0, -46],
                  })
                }
              >
                <Popup>
                  <div>
                    <h3>{bird.name}</h3>
                    <p>Species: {bird.species}</p>
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

export default Wildlife;
