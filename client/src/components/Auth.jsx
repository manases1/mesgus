import React, { useState } from 'react'
import Cookie from 'universal-cookie'
import axios from 'axios';

import signinImage from '../MyAssets/signup.jpg'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
            </div>
        </div>
    </div>
  )
}

export default Auth