import React from 'react';
import '../../assets/styles/NewTravel/Maps.scss';
import '../../assets/styles/NewTravel/Maps.scss'

const Maps = () => {
   return(
       <section className="MapContainer">
       <iframe src="../API/index.html"  className="Map"></iframe>

       </section>
   )
}

export default Maps;