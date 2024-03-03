import React, { useRef, useEffect, useState } from 'react';import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import marker from '../images/marker.jpg'
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW5hc2F6ZWRhemVkIiwiYSI6ImNsdGF3dWhxNTFqeHMyanF1ZjFjaGQ5YTMifQ.q8WergT1aUUNiB56lL38mQ'
});
function ContactPage() {
  const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

  return (
    <div className=" mt-5 text-white text-center" style={{paddingTop:"80px" ,
      backgroundColor:" #05405B",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%230974A5' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`}}>
      <div className="">
        <div className="">
          <h1 className="">Contact Us</h1>
        </div>
      </div>

      <div className="">
        <div className="">
          <div className=''>
          <p>
            <i className="fas fa-phone " style={{color:"gold"}}></i> Phone: (123) 456-7890
          </p>
          <p>
            <i className="fas fa-fax"  style={{color:"gold"}}></i> Fax: (123) 456-7890
          </p>
          <p>
            <i className="fas fa-envelope"  style={{color:"gold"}}></i> Email: info@example.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"  style={{color:"gold"}}></i> Address:  Chotrana, Ariana, 2036, Tunisia
        
          </p>
          </div>
          {/* social media link */}
        </div>
        <div className="mt-3">
          <h2>Office Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>

      <div className="row ">
        <div className="col">
          {/* ajouter une map */}
          <div id="map"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <h2>Come see us !</h2>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          {/*  */}
          <div className="contact-form d-flex justify-content-center">
          
          <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '400px',
    width: '80vw'
  }}
  center={[10.19014270995882,36.89895784351965]}
  zoom={[15]}
  className='shadow rounded'
>
<Marker coordinates={[10.19014270995882,36.89895784351965]} anchor="bottom"><img src={marker} /></Marker>
</Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;