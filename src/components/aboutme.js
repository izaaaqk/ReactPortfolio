import React, { Component } from "react";
import { Avatar } from '@mui/material';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import pic from '../pic.jpg';


class AboutMe extends Component {
    render() {
        return(
            <div>
                <h1>About Me</h1>
                <MDBContainer>
                    <div className="mx-auto">
                <div style={{backgroundColor: "lightblue"}}>
                <Avatar
                    alt="Remy Sharp"
                    src={pic}
                    sx={{ width: 200, height: 200 }}
                />
                    <h1>Isaac Aguirre</h1>
                </div>

                        Centered element
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

export default AboutMe;