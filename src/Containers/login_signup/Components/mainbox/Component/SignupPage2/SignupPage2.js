import React from 'react'
import "../Styles.css";
import {InputLabel, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ButtonBase } from "@mui/material";

const Page1 = () => {

  const [location, setLocation] = React.useState("");
  // const handleChange = (event: SelectChangeEvent) => {
  //     setLocation(event.target.value as string);
  // }
  

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <div className="mainboxSignupTextFieldContainer SignupNameContainer">
        <FormControl>
          <InputLabel id="mainboxSignupLabelName">Name</InputLabel>
          <OutlinedInput
            id="mainboxSignupName"
            placeholder="Rahul Bose"
          ></OutlinedInput>
          <FormHelperText>Enter your name</FormHelperText>
        </FormControl>
      </div>
      <FormControl>
        <div className="mainboxSignupTextFieldContainerButton">
          <div className="mainboxSignupTextFieldContainerButton SignupEmailContainer">
            <InputLabel id="mainboxSignupLabelEmail">Email</InputLabel>
            <OutlinedInput
              id="mainboxSignupEmail"
              placeholder="xyz@gmail.com"
            ></OutlinedInput>
            <FormHelperText>Enter your email identity</FormHelperText>
          </div>
          <div className="mainboxSignupEmailVerifyContainer">
            <ButtonBase id="mainboxSignupEmailVerify">Verify Email</ButtonBase>
          </div>
        </div>
      </FormControl>
      <FormControl>
        <div className="mainboxSignupTextFieldContainerButton">
          <div className="mainboxSignupTextFieldContainer SignupPhoneContainer">
            <InputLabel id="mainboxSignupLabelPhone">Phone</InputLabel>
            <OutlinedInput
              id="mainboxSignupPhone"
              placeholder="+91 8563014678"
            ></OutlinedInput>
            <FormHelperText>Enter your phone number</FormHelperText>
          </div>
          <div className="mainboxSignupPhoneVerifyContainer">
            <ButtonBase id="mainboxSignupPhoneVerify">Verify Phone</ButtonBase>
          </div>
        </div>
      </FormControl>
    </div>
  );
}

export default Page1