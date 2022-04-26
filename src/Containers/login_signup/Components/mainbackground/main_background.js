import React from 'react'
import './main_background.css'
import ParticlesCircles from './Components/ParticlesCircles/ParticlesCircles';
import backgroundsvg from "./Assests/img/Shape.svg";


function Mainbackground() {
  return (
    <div>
      <div className="ParticlesCircles">
        <ParticlesCircles />
      </div>

      <div className="mainBackground">
        {/* <backgroundsvg/> */}
      </div>
    </div>
  );
}

export default React.memo(Mainbackground);