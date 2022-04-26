import React from 'react'
import ParticleCircleConfig from "./ParticleCircleConfig";
import Particles from "react-tsparticles";


const ParticlesCircles = () => {
    const particlesInit = async (main) => {
    console.log(main);
    }
    const particlesLoaded = (container) => {
    console.log(container);
    }
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticleCircleConfig}
      />
    </div>
  );
}

export default ParticlesCircles