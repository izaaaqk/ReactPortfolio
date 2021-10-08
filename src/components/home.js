import React, { Component } from "react";
import AboutMe from "./aboutme";
import Contact from "./contactme";
import Projects from "./projects";


class Home extends Component {
    render() {
        return(
            <div>


                <AboutMe/>

                <Projects/>
                <Contact/>
            </div>
        )
    }
}

export default Home;