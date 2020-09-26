function updateMAP() {
    fetch("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?where=OBJECTID%3E0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=")
    .then(resolve => resolve.json())
    .then(rsv => {
        // console.log(rsv);
        const {features : lol} = rsv;
        // console.log(lol);

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );
        lol.forEach(element => {
            // console.log(element.attributes.Lat);
            // console.log(element.attributes.Long_);
            // console.log(element.attributes.Confirmed);


            lat = element.attributes.Lat;
            lon = element.attributes.Long_;
            cases = element.attributes.Confirmed;

            if (cases>757505){
                color = "rgb(100, 50, 200)";
            }

            else{
                color = `rgb(${10}, 200, 200)`;
            }


            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([lon, lat])
                .addTo(map);






            document.getElementById('fly').addEventListener('click', function () {
                // Fly to a random location by offsetting the point -74.50, 40
                // by up to 5 degrees.
                map.flyTo({
                    center: [
                         -77.208137, 38.902710
                    ],
                    zoom: 11,
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });
            });


        });
    })
    }

updateMAP();
