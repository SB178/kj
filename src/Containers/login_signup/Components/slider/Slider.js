import React from "react";
import "./slider.css";
import OtpInputField from "./Components/OtpInputField";
// import { useTransition, animated } from "react-spring";

import ButtonBase from "@mui/material/ButtonBase";
const HelperTextPage2 = () => {
  return (
    <div className="helperArea">
      <div className="helperTextPage2Container">
        <ul className="helperTextPage2">
          <li className="helperTextPage2Li">
            Your Email ID is <b>not verified</b>. PLEASE click on{" "}
            <b>Verify Email</b>.
          </li>
          <li className="helperTextPage2Li">
            Your Phone Number is <b>not verified</b>. PLEASE click on{" "}
            <b>Verify Phone</b>.
          </li>
        </ul>
      </div>
      {/* <div className="helperOtp"><OtpInputField /></div> */}
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
          <div className="sliderSigninMainContainer">
            <h5 className="sliderSigninMain">For signing in</h5>
            <h5 className="sliderSigninMain">you have enter</h5>
            <h5 className="sliderSigninMain sliderSigninFocused">
              EMAIL IDENTITY
            </h5>
          </div>
          <h5 className="sliderSigninMain">Don't have account?</h5>
          <div className="containerSignupButton">
            <ButtonBase id="SignupButton" onClick={() => handler(key)}>
              {"SIGNUP"}
            </ButtonBase>
          </div>
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
          {/* <div className="sliderSignupMainContainer">
            <h5 className="sliderSignupMain">Enter your personal info</h5>
            <h5 className="sliderSignupMain">and start journey</h5>
            <h5 className="sliderSignupMain sliderFocused">with Telly</h5>
          </div>
          <h5 className="sliderSignupMain">Already have account?</h5>
          <div className="containerSignupButton">
            <ButtonBase id="SigninButton" onClick={() => handler(key)}>
              SIGNIN
            </ButtonBase>
          </div> */}
          {HelperTextPage2()}
        </div>
      }
    </div>
  );
};

export default Slider;
