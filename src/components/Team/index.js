import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import './base.css'

export default class Team extends Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center" className="team">
                <Grid item><h2>Built for individuals and teams</h2></Grid>
                <Grid item><p style={{marginTop: '-1.5rem'}}>We built OpenPhone to grow with you. Bring your team to collaborate and communicate faster.</p></Grid>
                <Grid item xs={9} style={{marginTop: '12vh'}}>
                    <Grid container justify="space-between">
                        <Grid item xs={5}>
                            <article>
                                <h3>Bring your team</h3>
                                <p>Invite your teammates to get direct or shared numbers. Manage all company-owned numbers from a simple interface. Your team will love how easy it is to get started.</p>
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/3enlNbl54ObxAQDUoqT7Xf/1801f44b96247e3dbf6375da2c615b6d/Home_Features_01.jpg" alt="" />
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" style={{marginTop: '5rem'}}>
                        <Grid item xs={5}>
                            <article>
                                <h3>Share a phone number</h3>
                                <p>Invite your team to call and text from the same number. Every message shows who sent it - no more guessing. You can even see when someone is viewing a conversation or typing.</p>
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/3TroKyoYLUPaVXP30YuGUV/ab7e13084aef330f82c858d8ec85dc14/Home_Features_02.jpg" alt="" />
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" style={{marginTop: '5rem'}}>
                        <Grid item xs={5}>
                            <article>
                                <h3>Get Insight</h3>
                                <p>How much time did your team spend talking to customers last week? What's the busiest time of the week for you? OpenPhone will give you insight into these and much more.</p>
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/6fgkODVrz53HXwwwC0hhy0/134defe83015d3f69702009db61d7c37/Home_Features_03.jpg" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={9} style={{marginTop: '3rem'}}>
                    <img src="/decor.PNG" alt="" style={{width: '100%'}} />
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item><h2>Connected to the tools you use</h2></Grid>
                        <Grid item><p style={{marginTop: '-1.5rem'}}>OpenPhone connects to the tools you use to save you time and automate mundane work.</p></Grid>
                    </Grid>
                    <Grid container className="tools" spacing={10} style={{marginTop: '3rem', marginBottom: '3rem'}}>
                        <Grid item xs={4}>
                            <article>
                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/4341S2BTTqgQXVakpvGqlB/9a40ae5ec8124069c2e1789f370a1141/hubspot.svg" alt="" />
                            <h3>HubSpot</h3> 
                            <p>See the full picture of your customer interactions by connecting your phone to HubSpot.</p>
                            </article>
                        </Grid>
                        <Grid item xs={4}>
                            <article>

                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/zcok8mF8Q4psRsLLPmVIQ/938a1e6db4e63c8e0573ed3f09e92819/zapier.svg" alt="" />
                            <h3>Zapier</h3>
                            <p>Connect your phone to thousands of applications via Zapier to get rid of any manual, tedious work.</p>
                            </article>
                        </Grid>
                        <Grid item xs={4}>
                            <article>

                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/2W7qVFuSZ3kDYjwuYkxHQI/bc80f87ce1f8b11ee4223663aae6220c/slack.svg" alt="" />
                            <h3>Slack</h3>
                            <p>Keep your entire team in the loop about what's going on by connecting OpenPhone to Slack.</p>
                            </article>
                        </Grid>
                        <Grid item xs={4}>
                            <article>

                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/1azPi8F0EpqV6Wu9h2eUPy/a0b14b53eeac9e66d3465d56a5a99610/google-contacts.svg" alt="" />
                            <h3>Google Contacts</h3>
                            <p>Stay in touch with your contacts easily by syncing your OpenPhone address book with Google Contacts.</p>
                            </article>
                        </Grid>
                        <Grid item xs={4}>
                            <article>

                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/3QG5mfrenJVT29IaB8ufeT/fa5d29cc7793134ea5fa3f2a1fcfa475/salesforce.svg" alt="" />
                            <h3>Salesforce</h3>
                            <p>Get the full picture of your customer interactions by connecting your phone to Salesforce CRM.</p>
                            </article>
                        </Grid>
                        <Grid item xs={4}>
                            <article>
                            <img src="https://images.ctfassets.net/4dn1hy7dfehz/4greZuNjndAgxetDAM8ZqU/7118c58c1be2b3e3f9098383be25bc4a/pipedrive.svg" alt="" />
                            <h3>Pipedrive</h3>
                            <p>Get the full picture of your customer interactions by connecting your phone to Pipedrive CRM.</p>
                            </article>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className="watchDemo"><button><span>🍿</span><p>Watch the demo</p><svg fill="white" width="12" height="12" viewBox="0 0 16 16"><path d="M14.16 7.395L2.69.122a.8.8 0 0 0-.785-.036C1.655.212 1.5.46 1.5.727v14.545c0 .268.155.515.404.64.113.057.237.086.36.086.148 0 .297-.04.424-.122l11.47-7.273A.72.72 0 0 0 14.5 8a.72.72 0 0 0-.34-.605z"></path></svg></button></Grid>
            </Grid>
        )
    }
}
