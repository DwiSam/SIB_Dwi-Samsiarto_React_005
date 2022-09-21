import React from "react";
import "../../App.css";

class Avatar extends React.Component {
    render() {

    return (
        <>
            <div className="avatarContainer">
                <img 
                    src="https://img.icons8.com/doodle/192/000000/walter-white.png" 
                    alt="Avatar"
                />
            </div>
        </>
    )
    }
}

export default Avatar;