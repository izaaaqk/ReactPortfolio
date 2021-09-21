import React, { Component } from "react";
import AboutMe from "./aboutme";
import Contact from "./contactme";
import Projects from "./projects";


class Home extends Component {
    render() {
        return(
            <div>
                <h1>Home</h1>
                <div style={{BackgroundColor: "green"}}>

                <AboutMe/>

                </div>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}

export default Home;