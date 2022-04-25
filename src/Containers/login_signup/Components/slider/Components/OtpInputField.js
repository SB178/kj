import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./OtpInputField.css";

const OtpInputField = () => {
  const [OTP, setOTP] = React.useState("");
  return (
    <OTPInput
      value={OTP}
      onChange={setOTP}
      className="ContainerStyle"
      inputClassName="ContainerInputStyle"
      // inputStyles={{
      //   height: "3vw",
      // }}
      OTPLength={6}
      otpType="number"
      autoComplete="false"
      disabled={false}
    />
  );
}

export default OtpInputField;
