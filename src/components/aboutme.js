import React, { Component } from "react";
import { Avatar } from '@mui/material';
import { MDBContainer, MDBIcon } from 'mdbreact';
import pic from './static/pic.jpg';



class AboutMe extends Component {
    render() {
        return(
            <div>
                <h1>About Me</h1>
                <MDBContainer style={{ marginLeft: "25%", marginRight: "25%"}}>
                    <div>

                <Avatar
                    alt="Isaac Aguirre"
                    src={pic}
                    sx={{ width: 200, height: 200 }}
                />
                    <h1>Isaac Aguirre</h1>

                    </div>
                </MDBContainer>
                <MDBContainer>
                    <h4 style={{marginBottom: "2%"}}>I'm a Full-stack software developer with experience in:</h4>

                    <h3 style={{listStyleType: "none", marginLeft: "5%"}}>

                    <li style={{marginBottom: "2%"}}><MDBIcon fab icon="html5" />  HTML</li>
                    <li style={{marginBottom: "2%"}}><MDBIcon fab icon="css3-alt" />  CSS</li>
                    <li style={{marginBottom: "2%"}}><MDBIcon fab icon="js" />  JavaScript</li>
                    <li style={{marginBottom: "2%"}}><MDBIcon fab icon="node" />  NodeJS</li>
                    <li style={{marginBottom: "2%"}}><MDBIcon fab icon="react" />  React</li>
                    </h3>

                </MDBContainer>

            </div>
        )
    }
}

export default AboutMe;