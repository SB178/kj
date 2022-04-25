import React from "react";
import "../Styles.css";
import { InputLabel, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Page1 = () => {
  const [location, setLocation] = React.useState("");



  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <FormControl>
        <div className="mainboxSignupLocationContainer">
          <InputLabel id="mainboxSignupLabelLocation">Location</InputLabel>
          <Select
            fullWidth
            id="mainboxSignupLocation"
            onChange={handleChange}
            value={location}
            renderValue={(val) => val}
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
            <InputLabel id="mainboxSignupLabelPincode">Pincode</InputLabel>
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
            <FormHelperText>Enter your ward or block number</FormHelperText>
          </div>
        </FormControl>
      </div>

      <div className="mainboxChargeContainer">
        <div className="mainboxChargeLabel">Installation Charge:</div>
        <div className="mainboxChargeAmount">
          <FormControl disabled sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
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
};

export default Page1;
