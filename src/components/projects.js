import React, { Component, } from "react";
import ActionAreaCard from './project1';
import Grid from "@material-ui/core/Grid";

class Projects extends Component {
    render() {
        return(
            <div>
                <h1>Projects</h1>
        <Grid container spacing={2}>
            <Grid item xs={8}>

                <ActionAreaCard/>
            </Grid>
            <Grid item xs={4}>
                <ActionAreaCard/>

            </Grid>
            <Grid item xs={4}>
                <ActionAreaCard/>

            </Grid>
            <Grid item xs={8}>
                <ActionAreaCard/>

            </Grid>
        </Grid>

            </div>
        )
    }
}

export default Projects;