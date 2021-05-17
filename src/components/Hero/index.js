import React, { Component } from 'react'
import './base.css'
import {Grid} from '@material-ui/core'

export default class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container className="hero" direction="column">
                    <Grid item><h1>Your business phone, reimagined.</h1></Grid>
                    <Grid item xs={5}><p>OpenPhone adds a work phone number to your existing devices. No need to carry two phones or extra SIM cards.</p></Grid>
                    <Grid item><button>Try for free</button></Grid>
                    <Grid item xs={10}><img src = "/hero.PNG" alt="" style={{width: '100%'}} /></Grid>
                    <Grid item><p>Professionals at the world's leading companies choose OpenPhone for their communications</p></Grid>
                    <Grid item xs={8}><img src = "/companies.PNG" alt="" style={{width: '100%'}} /></Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
