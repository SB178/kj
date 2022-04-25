import React from "react";
import "./slider.css";
import OtpInputField from "./Components/OtpInputField/OtpInputField";
import DefaultComp from "./Components/DefaultComp/DefaultComp";
// import { useTransition, animated } from "react-spring";
const HelperTextPage2 = () => {
  return (
    <div className="helperArea">
      
    </div>
  );
};

const Slider = ({ sliderData, handler, key }) => {
  return (
    <div className={sliderData[key] ? "sliderright" : "sliderleft"}>
      {
        <div
          className={
            sliderData[key]
              ? "sliderSigninContainerRight"
              : "sliderSigninContainerLeft"
          }
        >
          <h3 className="sliderSigninHeading">Welcome Back!</h3>
          <DefaultComp key={key} handler={handler} />
        </div>
      }
      {
        <div
          className={
            sliderData[key]
              ? "sliderSignupContainerRight"
              : "sliderSignupContainerLeft"
          }
        >
          <h3 className="sliderSignupHeadingMove">Hello Human!</h3>
          <DefaultComp key={key} handler={handler} />
          {/* {HelperTextPage2()} */}
        </div>
      }
    </div>
  );
};

export default Slider;
