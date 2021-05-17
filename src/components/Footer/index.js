import React, { Component } from 'react'
import './base.css'
import {Grid} from '@material-ui/core'

export default class Footer extends Component {
    render() {
        return (
            <Grid container justify="space-evenly" className="footer">
                <Grid item xs={3}>
                    <img src="https://www.openphone.co/images/open-phone.svg" alt="" />
                    <h3>Delightful and powerful business phone for professionals, teams, and companies.</h3>
                    <div className="stores">
                        <img src="https://www.openphone.co/images/app-store.svg" alt="" />
                        <img src="https://www.openphone.co/images/google-play.svg" alt="" />
                    </div>
                    <h4>Copyright 2021, OpenPhone Technologies, Inc. All Rights Reserved.</h4>
                </Grid>
                <Grid item xs={6} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ul>
                        <li><h2>Company</h2></li>
                        <li>About</li>
                        <li>Press</li>
                        <li>Careers✨</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li><h2>Resources</h2></li>
                        <li>Blog</li>
                        <li>What’s New</li>
                        <li>System Status</li>
                        <li>Live Demo + Q&A</li>
                        <li>Downloads</li>
                    </ul>
                    <ul>
                        <li><h2>Contact</h2></li>
                        <li>Email Us</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                    <ul>
                        <li><h2>Why OpenPhone</h2></li>
                        <li>OpenPhone vs Google Voice</li>
                        <li>OpenPhone vs RingCentral</li>
                        <li>OpenPhone vs Vonage</li>
                        <li>OpenPhone vs Grasshopper</li>
                        <li>OpenPhone vs Line2</li>
                    </ul>
                </Grid>
            </Grid>
        )
    }
}
