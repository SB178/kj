import { ButtonBase } from '@mui/material';
import React from 'react'
import OtpInputField from "./Component/OtpInputField/OtpInputField";
import "./HelperTextPage2.css"

const HelperTextPage2 = () => {
  const verficationType = "Email verification";
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
      <div className="helperOtp">
        <div className="HelperOtpHeading">{verficationType}</div>
        <OtpInputField />
        <div className="HelperOtpButtonContainer">
          <ButtonBase id="HelperOtpButton">Verify</ButtonBase>
        </div>
      </div>
    </div>
  );
}

export default HelperTextPage2