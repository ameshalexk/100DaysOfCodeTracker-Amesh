import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const Map = (props) => {

  const covidData = props.purchases;

  const [viewport, setViewport] = useState({
    latitude: 39.50,
    longitude: -98.35,
    zoom: 3,
    width: "50vw",
    height: "50vh"
  });

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {Object.entries(covidData).map((el, i) => {
          if (i === 6 ) {
            return el.map((e, j) => {
              if (j === 1) {
                return e.map((f,l) => {
                  return Object.entries(f).map((z,y) => {
                    if (y===0) {                      
                      return z.map((t,o)=> {
                        if (o === 1 && t.Lat != null && t.Long_ != null) {
                          return (<Marker key={t.Deaths} latitude={t.Lat} longitude={t.Long_}>
                        <div>{t.Deaths}</div>
                      </Marker>) 
                        }
                        
                      })
                    }
                  })
                })
              }
            })
          }
        })}
      </ReactMapGl>
    </div>
  );
};
export default Map;














