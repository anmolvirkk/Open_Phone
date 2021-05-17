import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import {Grid} from '@material-ui/core'
import './index.css'
import Team from '../../components/Team'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>

<Header />
            <Grid container style={{marginTop: '10rem'}} direction="column" justify="center" alignItems="center">
                <Grid item xs><Hero /></Grid>
                <Grid item xs={9} className="howitworks">
                    <h2>How it works</h2>
                    <ul>
                        <li>
                            <img alt = "" src="https://www.openphone.co/images/process-pic-1.svg" />
                            <p>Get a number or bring your own</p>
                        </li>
                        <li className="arrow">
                            <img src = "/arrow.PNG" alt="" />
                        </li>
                        <li>
                            <img alt = "" src="https://www.openphone.co/images/process-pic-2.svg" />
                            <p>Download the app</p>
                        </li>
                        <li className="arrow">
                            <img src = "/arrow.PNG" alt="" />
                        </li>
                        <li>
                            <img alt = "" src="https://www.openphone.co/images/process-pic-3.svg" />
                            <p>Start messaging and calling</p>
                        </li>
                    </ul>
                </Grid>
                <Grid item><About /></Grid>
                <Grid item><Team /></Grid>
                <Grid item><Testimonials /></Grid>
                <Grid item style={{width: '100%'}}><Footer /></Grid>
            </Grid>
            </React.Fragment>
        )
    }
}
