import React from "react";

function LogOut(props) {
    return (
        <div>
            <h2>Log Out</h2>

            <form>
                <input
                    className="input"
                    value="Log Out"
                    type="submit"
                    onClick={props.handleLogOut}
                />
            </form>
        </div>
    );
}

export default LogOut;
