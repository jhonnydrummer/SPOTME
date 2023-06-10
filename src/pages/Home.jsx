import { useState, useEffect } from "react";
import "./home.css";
import imgCenter from "../img/center.png";
import marcador from "../icons/placeholder.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import SideBar from "../componentes/sideBar";
import L from "leaflet";

// Define o marcador
const markerIcon = L.icon({
  iconUrl: marcador,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});





const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [UserId, setUserId] = useState("");
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleSearch = () => {
    if (latitude && longitude) {
      setMarkerPosition({
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
        
      }); 
      localStorage.setItem('latitude', latitude)
      localStorage.setItem('longitude', longitude)
      
      const dataLocation = {
        Latitude: parseFloat(latitude),
        Longitude: parseFloat(longitude),
        UserId: UserId,
      };

      fetch("https://api.secureme.me/api/v1/position", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLocation),
      })
        .then((response) => {
          if (response.ok) {
            console.log(dataLocation);
          } else {
            console.error("Erro ao salvar o histórico de localização.");
          }
        })
        .catch((error) => {
          console.error("Erro ao enviar a solicitação:", error);
        });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "latitude") {
      setUserId(value);
      setLatitude(value);
    } else if (id === "longitude") {
      setLongitude(value);
    }
  };

  const ZoomMap = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
  };

  // Garante que o código seja executado apenas após o DOM ter sido completamente carregado
  useEffect(() => {
    setMarkerPosition();
  }, []);

  const centerLocation = () => {
    if (latitude && longitude) {
      setMarkerPosition({
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      });
    }
  };

  return (
    <>
      <SideBar />
      <div id="search-container">
        <button id="centralizar_bt" onClick={centerLocation}>
          <img src={imgCenter} alt="Center" />
        </button>
        <input
          type="text"
          id="latitude"
          placeholder="Latitude"
          value={latitude}
          onChange={handleChange}
        />
        <input
          type="text"
          id="longitude"
          placeholder="Longitude"
          value={longitude}
          onChange={handleChange}
        />
        <button id="pesquisar_bt" onClick={handleSearch}>
          Pesquisar
        </button>
      </div>

      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
          <Marker
            position={[markerPosition.lat, markerPosition.lng]}
            icon={markerIcon}
          />
        )}
        {markerPosition && (
          <ZoomMap center={[markerPosition.lat, markerPosition.lng]} />
        )}
      </MapContainer>
    </>
  );
};

export default Home;
