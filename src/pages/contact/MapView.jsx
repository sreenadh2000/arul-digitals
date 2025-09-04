import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position = [12.9716, 77.5946];
const locationName = "Arul Digitals";
export default function MapView() {
  return (
    <div className="map-section">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Free OpenStreetMap Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //   attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {/* Marker with popup */}
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h4 className="my-4">📍{locationName}</h4>
            </div>
          </Popup>
        </Marker>
        {/* Custom overlay div (top-right corner) */}
        <div className="map-overlay p-2">
          <h4 className="mb-4">{locationName}</h4>
          <a
            className="p-2"
            href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </MapContainer>
    </div>
  );
}
