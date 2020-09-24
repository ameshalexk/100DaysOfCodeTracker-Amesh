import React from "react";
import "./LogInForm.css";

function LogInForm(props) {
    return (
        <div className="loginform">
            <h2>Log In</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    className="input"
                    type="text"
                    name="email"
                    onChange={props.handleInput}
                />

                <label htmlFor="password">Password</label>
                <input
                    className="input"
                    type="text"
                    name="password"
                    onChange={props.handleInput}
                />

                <input
                    className="button"
                    value="Submit"
                    type="submit"
                    onClick={props.handleLogIn}
                />
            </form>
        </div>
    );
}

export default LogInForm;
