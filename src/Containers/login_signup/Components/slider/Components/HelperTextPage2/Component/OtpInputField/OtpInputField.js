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
      inputStyles={{
        height: "3vw",
        margin: "0.5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      OTPLength={6}
      otpType="number"
      autoComplete="off"
      disabled={false}
    />
  );
}

export default OtpInputField;
