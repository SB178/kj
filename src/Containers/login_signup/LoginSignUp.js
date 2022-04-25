import React from "react";
import "./styles.css";
import MainBackground from "./Components/mainbackground/main_background";
import Mainbox from "./Components/mainbox/mainbox";
import Slider from "./Components/slider/Slider";
// import App from "./Components/test/test";

function LoginSignUp() {
  const [slideData, setSlideData] = React.useState({
    slideLeft: true,
    slideRight: true,
  });
  const changeSlideValues = (key) => {
    setSlideData((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div>
      <MainBackground className="mainBackground" />
      <Mainbox className="mainbox" key="slideLeft" handler={changeSlideValues} sliderData={slideData} />
      <Slider className="slider" key="slideRight" handler={changeSlideValues} sliderData={slideData} />
      {/* <App/> */}
    </div>
  );
}

export default LoginSignUp;
