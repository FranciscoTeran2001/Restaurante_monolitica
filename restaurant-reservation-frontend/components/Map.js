import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ restaurants }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 40.416775, // Example coordinates
    lng: -3.703790
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        {restaurants.map(restaurant => (
          <Marker key={restaurant.id} position={restaurant.location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;