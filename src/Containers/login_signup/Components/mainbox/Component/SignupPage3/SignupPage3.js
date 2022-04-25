import React from 'react'
import "../Styles.css";
import {InputLabel, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonBase } from "@mui/material";

const Page1 = () => {

  const [location, setLocation] = React.useState("");
  // const handleChange = (event: SelectChangeEvent) => {
  //     setLocation(event.target.value as string);
  // }

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const [fileName, setFileName] = React.useState("");
  const [isFile, setIsFile] = React.useState(false);

  const fileHandler = (event) => {
    setFileName(event.target.files[0]);
    setIsFile((e) => !e);
  };

  const showFile = (isFile, fileName) => {
    return (
      isFile && (
        <div className="mainboxSignupReqFileLog">
          <h5>Hello.pdf{fileName}</h5>
          <ButtonBase onChange={fileHandler}>
            <DeleteIcon />
          </ButtonBase>
        </div>
      )
    );
  };

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
            <InputLabel id="mainboxSignupLabelReqFile">Document</InputLabel>
            <Select fullWidth id="mainboxSignupReqFile" onChange={handleChange}>
              <MenuItem value={"Adhaar Card"}>Adhaar Card</MenuItem>
              <MenuItem value={"Pan Card"}>Pan Card</MenuItem>
              <MenuItem value={"Voter ID Card"}>Voter ID Card</MenuItem>
              <MenuItem value={"Passport"}>Passport</MenuItem>
            </Select>
            <FormHelperText>
              PLEASE make a single PDF file(.pdf) providing photo of both side.
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
      {showFile(isFile, fileName)}
    </div>
  );
}

export default Page1