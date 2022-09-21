import React from "react";
import Avatar from "./avatar";
import Scrollspy from 'react-scrollspy';
import "../../App.css";

class Sidebar extends React.Component {
    render() {
    
        const menuBar = [
            "About",
            "Experience",
            "Education",
            "Skills",
            "Interests",
            "Awards"
        ];

        let path  = [
            "#About",
            "#Experience",
            "#Education",
            "#Skills",
            "#Interests",
            "#Awards"
        ];
    
    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <Avatar />
                <Scrollspy items={ menuBar } currentClassName="is-current">
                    {menuBar?.map((v,i) => 
                    <li className=''><a href={path[i]}>{v}</a></li>
                    )}
                </Scrollspy>
            </div>
        </div>
    )

    }
}

export default Sidebar;