import React from 'react';
 import {
        GoogleMap,
        withScriptjs,
        withGoogleMap
 } from  'react-google-maps';

const Map = (props)=>{
 return(
   <GoogleMap 
   defaultZoom={10}
   defaultCenter={{ lat: 13.4785983, lng: -88.2041089 }}
   />
 );

};

export default withScriptjs(
  withGoogleMap(
    Map
  )
)