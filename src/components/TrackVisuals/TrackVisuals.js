import React, { useEffect } from 'react';
import L from 'leaflet';
import './TrackVisuals.css';

const TrackVisuals = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);

        const socket = new WebSocket('wss://your-backend-service/ws');
        let vehicleMarker;

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const { latitude, longitude } = data;

            if (vehicleMarker) {
                vehicleMarker.setLatLng([latitude, longitude]);
            } else {
                vehicleMarker = L.marker([latitude, longitude]).addTo(map);
            }
        };
    }, []);

    return <div id="map" className="track-visuals"></div>;
};

export default TrackVisuals;
