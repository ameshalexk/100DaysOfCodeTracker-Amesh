import React from "react";

import "./SignUpForm.css";

function SignUpForm(props) {
  return (
    <div className="loginform">
      <h2>Sign Up</h2>
      <form>
        
          <label htmlFor="email">Email</label>
          <input className="input" type="text" name="email" onChange={props.handleInput} />
        
        
          <label htmlFor="password">Password</label>
          <input className="input" type="text" name="password" onChange={props.handleInput} />
        
        <input className="button" value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div>
  );
}

export default SignUpForm;
