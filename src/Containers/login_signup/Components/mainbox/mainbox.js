import React from "react";
import "./mainbox.css";

import SignupPage1 from "./Component/SignupPage1/SignupPage1";
import SignupPage2 from "./Component/SignupPage2/SignupPage2";
import SignupPage3 from "./Component/SignupPage3/SignupPage3";
import SignupPage4 from "./Component/SignupPage4/SignupPage4";

import { InputBase} from "@mui/material";
import { ButtonBase } from "@mui/material";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Mainbox = ({ sliderData, handler, key }) => {

  const [state, setState] = React.useState(1); 

  const signup = (state) => {
    switch (state) {
      case 1:
        return (
          <div>
            <SignupPage1 />
          </div>
        );
      case 2:
        return (
          <div>
            <SignupPage2 />
          </div>
        );
      case 3:
        return (
          <div>
            <SignupPage3 />
          </div>
        );
      case 4:
        return(
          <div>
            <SignupPage4/>
          </div>
        );
      default:
        return null;
    }
  };

  const back = (state) => {
    if (state > 1)
      return (
        <div className="mainboxContinueButtonContainer">
          <ButtonBase
            id="mainboxBackButton"
            onClick={() => setState((e) => e - 1)}
          >
            <NavigateBeforeIcon />
            Back
          </ButtonBase>
        </div>
      );
    else
      return (
        <div className="mainboxContinueButtonContainer">
          <ButtonBase
            disabled
            id="mainboxBackButtonTransparent"
            onClick={() => setState((e) => e - 1)}
          >
            <NavigateBeforeIcon />
            Back
          </ButtonBase>
        </div>
      );
    
  };

  return (
    <div className="mainbox">
      <div className="mainboxSigninContainer">
        <div
          className={
            sliderData[key]
              ? "mainboxSigninContainerRight"
              : "mainboxSigninContainerLeft"
          }
        >
          <h3 className="mainboxSigninHeader">Sign in to Telly</h3>
          <h5 className="mainboxSigninLabel">Enter your Email identity</h5>
          <div className="mainboxcontainerSigninInputEmail">
            <InputBase
              hiddenLabel
              className="mainboxSigninInputEmail"
              id="filled-hidden-label-normal"
              placeholder="xyz@gmail.com"
            />
          </div>
          <div className="mainboxcontainerSigninButton">
            <ButtonBase id="mainboxSigninButton">SIGN IN</ButtonBase>
          </div>
        </div>
      </div>
      <div className="mainboxSignupContainer">
        <div
          className={
            sliderData[key]
              ? "mainboxSignupContainerRest"
              : "mainboxSignupContainerMove"
          }
        >
          {signup(state)}
          <div className="mainboxButtonContainer">
            {back(state)}
            <div className="mainboxContinueButtonContainer">
              <ButtonBase
                id="mainboxContinueButton"
                onClick={() => setState((e) => e + 1)}
              >
                Continue
                <NavigateNextIcon />
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbox;
