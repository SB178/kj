import React from "react";
import "../Styles.css";
import { InputLabel, MenuItem } from "@mui/material";
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

  const [file, setFile] = React.useState(null);
  const fileInputRef = React.useRef(null);


  const fileHandler = (event) => {
    console.log("triggered: ", event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const showFile = (fileName) => {
    return (
      <div className="mainboxSignupReqFileLog">
        <h5>{fileName}</h5>
        <ButtonBase
          onClick={() => {
            fileInputRef.current.value='';
            return setFile(null);
          }}
        >
          <DeleteIcon />
        </ButtonBase>
      </div>
    );
  };

  const fileCategories = [
    {
      value: "Adhaar Card",
      displayValue:"Adhaar Card"
    }
  ]

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
              {fileCategories?.map((item) => <MenuItem value={item?.value}>{ item?.displayValue||""}</MenuItem>)}
              {/* <MenuItem value={"Adhaar Card"}>Adhaar Card</MenuItem>
              <MenuItem value={"Pan Card"}>Pan Card</MenuItem>
              <MenuItem value={"Voter ID Card"}>Voter ID Card</MenuItem>
              <MenuItem value={"Passport"}>Passport</MenuItem> */}
            </Select>
            <FormHelperText>
              PLEASE make a single PDF file(.pdf) providing photo of both side.
            </FormHelperText>
          </FormControl>
        </div>
        <div className="mainboxReqFileButtonContiainer">
          <FormControl>
            <ButtonBase id="mainboxReqFileButton" component="label" disabled={!location?.trim() || file}>     
              <AddCircleOutlineIcon fontSize="large" />
              <input
                type="file"
                accept="application/pdf"                
                hidden
                onChange={(e) => 
                  setFile(e.target.files[0])
                }
                ref={fileInputRef}
              />
            </ButtonBase>
          </FormControl>
        </div>
      </div>
      {file ? showFile(file.name) : null}
    </div>
  );
};

export default Page1;
