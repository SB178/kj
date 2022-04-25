import React from "react";
import "./mainbox.css";
import { InputBase, InputLabel, MenuItem } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const Mainbox = ({ sliderData, handler, key }) => {
  // console.table(sliderData[key]);

  const [location, setLocation] = React.useState("");
  // const handleChange = (event: SelectChangeEvent) => {
  //     setLocation(event.target.value as string);
  // }
  const [state, setState] = React.useState(1);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const [fileName,setFileName] = React.useState('');
  const [isFile, setIsFile] = React.useState(false);

  const fileHandler = (event) => {
    setFileName(event.target.files[0]);
    setIsFile(e=>!e);
  }

  const showFile = (isFile,fileName) => {
    return (
      isFile && (
        <div className="mainboxSignupReqFileLog">
          <h5>hello{fileName}</h5>
          <ButtonBase onChange={fileHandler}>
            <DeleteIcon />
          </ButtonBase>
        </div>
      )
    ); 
  };
  


  const signup = (state) => {
    switch (state) {
      case 1:
        return (
          <div>
            <FormControl>
              <div className="mainboxSignupLocationContainer">
                <InputLabel id="mainboxSignupLabelLocation">
                  Location
                </InputLabel>
                <Select
                  fullWidth
                  id="mainboxSignupLocation"
                  onChange={handleChange}
                >
                  <MenuItem value={"w"}>w</MenuItem>
                  <MenuItem value={"x"}>x</MenuItem>
                  <MenuItem value={"y"}>y</MenuItem>
                  <MenuItem value={"z"}>z</MenuItem>
                </Select>
                <FormHelperText>Select your location</FormHelperText>
              </div>
            </FormControl>
            <div className="mainboxSignupPincodeWardContainer">
              <FormControl>
                <div className="mainboxSignupTextFieldContainer">
                  <InputLabel id="mainboxSignupLabelPincode">
                    Pincode
                  </InputLabel>
                  <OutlinedInput
                    id="mainboxSignupPincode"
                    placeholder="700110"
                  ></OutlinedInput>
                  <FormHelperText>Enter your pincode</FormHelperText>
                </div>
              </FormControl>

              <FormControl>
                <div className="mainboxSignupTextFieldContainer">
                  <InputLabel id="mainboxSignupLabelWard">Ward No.</InputLabel>
                  <OutlinedInput
                    id="mainboxSignupWard"
                    placeholder="19/B"
                  ></OutlinedInput>
                  <FormHelperText>
                    Enter your ward or block number
                  </FormHelperText>
                </div>
              </FormControl>
            </div>

            <div className="mainboxChargeContainer">
              <div className="mainboxChargeLabel">Installation Charge:</div>
              <div className="mainboxChargeAmount">
                <FormControl disabled sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={() => handleChange("amount")}
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
              </div>
            </div>
          </div>
        );
      case 2:
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
                  <ButtonBase id="mainboxSignupEmailVerify">
                    Verify Email
                  </ButtonBase>
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
                  <ButtonBase id="mainboxSignupPhoneVerify">
                    Verify Phone
                  </ButtonBase>
                </div>
              </div>
            </FormControl>
          </div>
        );
      case 3:
        return (
          <div>
            <FormControl>
              <div className="mainboxSignupTextFieldContainer SignupAddressContainer">
                <TextField
                  id="mainboxSignupAddress"
                  label="Address"
                  InputLabelProps={{
                    style: {
                      alignItems: "center",
                      backgroundColor: "white",
                      fontFamily: "Montserrat Medium",
                      fontSize: "1vw",
                    },
                  }}
                  placeholder="123 Main Street, New York, NY 10030"
                  multiline
                  maxRows={2}
                />
              </div>
              <FormHelperText>Enter your full address</FormHelperText>
            </FormControl>
            <div className="mainboxSignupTextFieldContainerWithButton">
              <div className="mainboxSignupReqFileContainer">
                <FormControl>
                  <InputLabel id="mainboxSignupLabelReqFile">
                    Document
                  </InputLabel>
                  <Select
                    fullWidth
                    id="mainboxSignupReqFile"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Adhaar Card"}>Adhaar Card</MenuItem>
                    <MenuItem value={"Pan Card"}>Pan Card</MenuItem>
                    <MenuItem value={"Voter ID Card"}>Voter ID Card</MenuItem>
                    <MenuItem value={"Passport"}>Passport</MenuItem>
                  </Select>
                  <FormHelperText>
                    PLEASE make a single PDF file(.pdf) providing photo of both
                    side.
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="mainboxReqFileButtonContiainer">
                <FormControl>
                  <ButtonBase id="mainboxReqFileButton" component="label">
                    <AddCircleOutlineIcon fontSize="large" />
                    <input
                      type="file"
                      accept="application/pdf"
                      hidden
                      onClick={fileHandler}
                    />
                  </ButtonBase>
                </FormControl>
              </div>
            </div>
            {showFile(isFile,fileName)}
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
    //  return(
    //   <div className="mainboxContinueButtonContainer"><ButtonBase id="mainboxBackButton" onClick={() => setState(e=>e-1)}><NavigateBeforeIcon/>Back</ButtonBase></div>
    //  )
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
