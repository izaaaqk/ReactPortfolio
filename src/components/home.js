import React, { Component } from "react";
import AboutMe from "./aboutme";
import Contact from "./contactme";

class Home extends Component {
    render() {
        return(
            <div>
                <AboutMe/>
                <Contact/>
            </div>
        )
    }
}

export default Home;