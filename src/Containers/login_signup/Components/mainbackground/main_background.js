import React from 'react'
import './main_background.css'
import Particles from "react-tsparticles";
import ParticleCircleConfig from './Components/ParticleCircleConfig';
import ParticleCustomShapeConfig from './Components/ParticleCustomShapeConfig';

function mainbackground() {
  const particlesInit = async (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  }
  return (
    <div>
      <div className="">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleCircleConfig}
        />
      </div>
      {/* <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleCustomShapeConfig}
        />
      </div> */}
      <div className="mainBackground"></div>
    </div>
  );
}

export default mainbackground