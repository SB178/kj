import React from 'react'
import './DefaultComp.css'
import { ButtonBase } from '@mui/material'
 const DefaultComp = ({key,handler}) => {
  return (
    <div>
        <div className="sliderSigninMainContainer">
            <h5 className="sliderSigninMain">For signing in</h5>
            <h5 className="sliderSigninMain">you have enter</h5>
            <h5 className="sliderSigninMain sliderSigninFocused">
              EMAIL IDENTITY
            </h5>
          </div>
          <h5 className="sliderSigninMain">Don't have account?</h5>
          <div className="containerSignupButton">
            <ButtonBase id="SignupButton" onClick={() => handler(key)}>
              SIGNUP
            </ButtonBase>
          </div>
    </div>
  )
}

export default DefaultComp;