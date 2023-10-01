import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const Tab2 = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <div className="col">
                        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tab2;
