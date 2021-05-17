import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import './base.css'

export default class About extends Component {
    render() {
        return (
            <Grid container direction="column" className="about" justify="center" alignItems="center">
                <Grid item xs={10}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item xs={5}>
                            <img src = "/about1.PNG" alt="" />
                        </Grid>
                        <Grid item xs={4}>
                            <article>
                                <h2>So much more than a phone</h2>
                                <p>Want to be able to talk & text on all your devices? Yep, we've got it. But it doesn't end there. We've reimagined what a phone can do for professionals.</p>
                            </article>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={5} justify="center" className = "tiles" style={{marginTop: '2rem'}}>
                        <Grid item xs={3}>
                            <div className="image">
                                <img src = "https://images.ctfassets.net/4dn1hy7dfehz/6f5DbKtpD0qaPMmdX6bkzA/48fa45263eaf524c0eb3e6a0b18b89b9/global-calling.svg" alt = "" />
                            </div>
                            <h3>Global calling and messaging</h3>
                            <p>Call and message anyone, anywhere in the world. Make cross-border communication easier.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/6m0n99WBQJyj6k5l5I9dDZ/05c69bab19bca7ccaefcabfc24db1d5a/group-messaging.svg" alt = "" />
                            </div>
                            <h3>Group messaging</h3>
                            <p>Create groups to communicate with multiple people at the same time and keep everyone on the same page.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/5MT6divxnP1kkNy0TUiojs/3f93196fb9855a7dca988cfb2960e6bf/multiple-numbers.svg" alt = "" />
                            </div>
                            <h3>Multiple numbers</h3>
                            <p>Turn phone numbers into dedicated inboxes and you can have as many as you want in one account.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/2hqjJ5mD2tzOSiXm4cBPZo/214cc8b10632521921a3f1142f1f0f26/call-recording.svg" alt = "" />
                            </div>
                            <h3>Call recording</h3>
                            <p>Record a call or set up auto-recording to record every call for you.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/2zTD7hUorIJCyeROLUnziH/904a0bd2253d79015624831527ec3878/business-hours.svg" alt = "" />
                            </div>
                            <h3>Business hours</h3>
                            <p>Get your sanity back by not getting calls and messages when you're off for the day.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/2VlskbZgqenD5YDZPbyjWq/c02ea2ebc9cbe76a045fdbbe53fe8a2e/snippets-auto-replies.svg" alt = "" />
                            </div>
                            <h3>Snippets & auto-replies</h3>
                            <p>Speed up your response time by creating templates for common questions.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/6phoinyfgmoHG8GBKpsKE3/ffd3b380b26db72aaf30a99dafa5dde5/lightweight-crm.svg" alt = "" />
                            </div>
                            <h3>Lightweight CRM</h3>
                            <p>Enrich your contacts with custom properties. This way, you'll have full context about who you're talking to.</p>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="image">
                            <img src = "https://images.ctfassets.net/4dn1hy7dfehz/t7KLwwFkHZZXyTR9gii0U/92cff251cea5c394a13bc57eff03ba1b/keyboard-shortcuts.svg" alt = "" />
                            </div>
                            <h3>Keyboard shortcuts</h3>
                            <p>We've optimized OpenPhone for efficiency with keyboard shortcuts for all key actions.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
