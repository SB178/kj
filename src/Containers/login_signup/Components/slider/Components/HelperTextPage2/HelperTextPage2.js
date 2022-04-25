import React from 'react'

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
      <div className="helperOtp">
        <OtpInputField />
      </div>
    </div>
  );
}

export default HelperTextPage2