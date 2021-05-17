import React, { Component } from 'react'
import './base.css'
import {Grid} from '@material-ui/core'

export default class Header extends Component {
    render() {
        return (
            <header>
                <Grid container justify="center" style={{width: '100%'}}>
                    <Grid item xs={11} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <ul>
                    <li className="logo"><img src = "https://www.openphone.co/images/open-phone.svg" alt="" /></li>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Downloads</li>
                    <li>Blog</li>
                    <li>Careers✨</li>
                </ul>
                <ul>
                    <li>Login</li>
                    <li className="sales"><button>Talk to Sales</button></li>
                    <li className="try"><button>Try for Free</button></li>
                </ul>
                    </Grid>
                </Grid>
            </header>
        )
    }
}
