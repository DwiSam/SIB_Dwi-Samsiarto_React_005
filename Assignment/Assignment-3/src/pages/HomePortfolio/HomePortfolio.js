import React from "react";
import About from "../../components/home/about";
import Experience from "../../components/home/experience";
import Education from "../../components/home/education";
import Skills from "../../components/home/skills";
import Interests from "../../components/home/interests";
import Awards from "../../components/home/awards";

class HomePortfolio extends React.Component {
    state = {
        isButtonEnable: true,
    };

    setButtonStatus = () => {
        this.setState({ isButtonEnable: true });
    };

    render() {
        return (
            <div>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interests />
                <Awards/>
            </div>
        );
    }
}

export default HomePortfolio;