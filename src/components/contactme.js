import React, { Component } from "react";
import {MDBContainer,} from "mdbreact";
import { MDBIcon } from 'mdb-react-ui-kit';

class Contact extends Component {
    render() {
        return(
            <div>
                <h1>Contact me</h1>
                <MDBContainer>
                    <h4 style={{marginBottom: "2%"}}>Here are links to contact me</h4>

                    <h3 style={{listStyleType: "none", marginLeft: "5%"}}>

                       <li style={{marginBottom: "2%"}}>
                           <a href="https://github.com/izaaaqk" style={{marginBottom: "2%"}}><MDBIcon fab icon="github" />  Github</a>
                       </li>
                        <li style={{marginBottom: "2%"}}>
                            <a href="https://www.linkedin.com/in/isaac-aguirre-b109b520a"><MDBIcon fab icon="linkedin" />LinkedIn</a>
                        </li>
                        <li style={{marginBottom: "2%"}}><MDBIcon fas icon="envelope" />  isaac.aguirre@du.edu</li>

                    </h3>



                </MDBContainer>
            </div>
        )
    }
}

export default Contact;