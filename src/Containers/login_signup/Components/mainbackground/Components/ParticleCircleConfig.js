const ParticleCircleConfig = {
  background: {
    color: {
      value: "#EEEEEE",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 80,
        duration: 1,
      },
    },
  },
  particles: {
    color: {
      value: "#3e82ee",
    },
    // links: {
    //   color: "#ffffff",
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.5,
    //   width: 1,
    // },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1080,
      },
      // limit:5,
      value: 5,
    },
    opacity: {
        random:{
            enable:true,
            minimumValue: 0.5,
        }
    },
    shape: {
      type:"circle",
    },
    size: {
      value: { min: 1, max: 20 },
    },
  },
  detectRetina: true,
};
export default ParticleCircleConfig;