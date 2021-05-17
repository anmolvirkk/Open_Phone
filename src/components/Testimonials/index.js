import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import './base.css'

export default class Testimonials extends Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center" className="testContainer">
                <Grid item className = "testTitle">
                    <h2>The #1 business phone app</h2>
                    <p>Trusted by thousands of professionals and companies.</p>
                </Grid>
                <Grid item xs={11} className = "testimonials">
                    <Grid container style={{width: '100%'}} justify="center" alignItems="flex-start">
                        <Grid item className="testColumn">
                            <Grid container>
                            <Grid item className="testItem">
                                    <p>”Just a piece of advice. I used my personal cell number as the company number and I still regret it a decade later (I get so many stupid calls). Don’t do what I did. I wish I had a service like this 10 years ago!”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/gTCZTnDD1gOkLnA7KwNZy/c1aa018c28f207a7b068b28d049ad33c/michael-seibel.png" alt="" />
                                        <div>
                                        <h3>Michael Seibel</h3>
                                        <h4>CEO at Y Combinator</h4>
                                        </div>
                                    </article>
                                </Grid>
                        <Grid item className="testItem">
                                    <p>”OpenPhone is the Best! The interface is really intuitive, clean and simple. It works seamlessly on my iPhone and has not failed to connect or have voicemails that mysteriously disappear as they did on other services I've used previously. It's great that you can message and send photos just as you would on any mobile device. A lot more flexibility than your traditional business line. You can set your business hours and customize away messages with a few clicks.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/18QZQNK0QJd2AkuBIOqeAU/b01dea2699ff5cf355619383fb0a0b42/melissa-hughes.png" alt="" />
                                        <div>
                                        <h3>Melissa Hughes</h3>
                                        <h4>Principal/Owner at Halogen Design Lab</h4>
                                        </div>
                                    </article>
                                </Grid>
                                <Grid item className="testItem">
                                    <p>”OpenPhone has a dazzlingly simple UI making it very easy to use. I have about 15 numbers on it. They also have an incredible support team. 10000x better than Dialpad.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/103q7ctd4g02k9Bd5dCRwG/8aa81f4c510bf4098baeb807c93312b4/daniel-petkevich.png" alt="" />
                                        <div>
                                        <h3>Daniel Petkevich</h3>
                                        <h4>Founder at Fair Square Medicare</h4>
                                        </div>
                                    </article>
                                </Grid>
                                
                         </Grid>    
                        </Grid>     
                        <Grid item className="testColumn">
                            <Grid container>
                            <Grid item className="testItem">
                                    <p>”@OpenPhoneApp + @SlackHQ integration. loving it! 💕getting notifications on incoming text messages has reduced our response time by 50%⬇️”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/3cNaEZ3VkH2bnRNjrO5pON/633e8d399aed1e21c31d362f993cc853/megha-agarwal.png" alt="" />
                                        <div>
                                        <h3>Megha Agarwal</h3>
                                        <h4>Co-founder, Neon</h4>
                                        </div>
                                    </article>
                                </Grid>
                        <Grid item className="testItem">
                                    <p>”I tried a few different VOIP products and found the software to feel very outdated - kind of like a webpage from the late 1990s. I switched to OpenPhone because the user experience is super clean and easy to use. I have all the tools I need and new features are being released all the time.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/3yFSpuaBJFXoOkA7Ge8M8z/c247807c947fdd426b5df29bb40de321/kelly-saunders.png" alt="" />
                                        <div>
                                        <h3>Kelly Saunders</h3>
                                        <h4>CEO at Abstract Energy</h4>
                                        </div>
                                    </article>
                                </Grid>
                                <Grid item className="testItem">
                                    <p>”We moved to OpenPhone to diversify the number of employees who could field calls for partners. It allows us to have better customer service levels, and quicker responses to basic customer questions as anyone can respond in real-time. We had tried other services before, and they didn't have nearly the same level of service, tech, or continuity we are getting with OpenPhone.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/2VKC1FZdOamgxEf9o30EpZ/6405c7d77b073965abfb831f7723e1c8/jd-modrak.png" alt="" />
                                        <div>
                                        <h3>JD Modrak</h3>
                                        <h4>Operations Manager at Sonder</h4>
                                        </div>
                                    </article>
                                </Grid>
                               
      </Grid>
                        </Grid>
                        <Grid item className="testColumn">
                            <Grid container>
                            <Grid item className="testItem">
                                    <p>”Really loving @OpenPhoneApp! It’s lovely to give out a toll-free number (US and Canada) and be able to see that it’s a business call. You can text with it too 👌🏼”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/5Si6cLohakp7P0IoSGCWOW/48fb25e7b01f5b29563801ea5d1b9531/melissa-jean-clark.png" alt="" />
                                        <div>
                                        <h3>Melissa Jean Clark</h3>
                                        <h4>WordPress developer, code champion, humble Canadian.</h4>
                                        </div>
                                    </article>
                                </Grid>       
                <Grid item className="testItem">
                                    <p>”Need a second phone number for business or ... whatever? Checkout @OpenPhoneApp. I'm very happy with it so far. They have both a great browser & app phone system.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/4HB3F3N8slncQ4hBRGKbrj/e164f6e3014e8d9c2f8051e179e09109/justin-noel.png" alt="" />
                                        <div>
                                        <h3>Justin Noel</h3>
                                        <h4>React Native Mobile App Developer</h4>
                                        </div>
                                    </article>
                                </Grid>
                             
                        <Grid item className="testItem">
                                    <p>”I have been using OpenPhone for almost 2 years for my business. I needed a solution that would give me a separate phone line while only using one phone. The ability to set business hours, do not disturb, and different voicemail messages depending on the situation are my favorite features. They also recently released a web app, which is awesome for texting when I don't want to pick up my phone while working. They are quick to respond to any questions, and the service is fairly priced. I highly recommend them!”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/3sM0VSEeI318c6ur0cJkI9/775594a4fa754c3b1dafd7a80db828c7/stacey-bowen.png" alt="" />
                                        <div>
                                        <h3>Stacey Bowen</h3>
                                        <h4>Owner @ Sonobe Business Services</h4>
                                        </div>
                                    </article>
                                </Grid>    
                            
                                </Grid>    
                        </Grid>     
                        <Grid item className="testColumn">
                            <Grid container>
                            <Grid item className="testItem">
                                    <p>It’s been fun getting the hang of @OpenPhoneApp. Definitely worth considering if you’re looking for a business number! Best people to work with, too. I’m a big fan already.</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/3hCfyIpvwiXZHS9SjP4RlF/413a058b921dd66cfdc281722c5950fd/luke-johnson.png" alt="" />
                                        <div>
                                        <h3>Luke Johnson</h3>
                                        <h4>User Experience Consultant, Web Designer, System Author, Compassionate Web Detangler</h4>
                                        </div>
                                    </article>
                                </Grid>
                        <Grid item className="testItem">
                                    <p>We just switched phone carriers to @OpenPhoneApp. (GUSHING) The ease of setting everything up was second to none; the app has everything I need and nothing I don’t need. I was blown away on the crystal clear quality of client voicemails. So modern & so perfect. Support: A+++</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/BZA9ZbJvtzUOFUI0kFECN/7285c5f0f60fbc27d8eec1771f3c3e5b/squareflair.png" alt="" />
                                        <div>
                                        <h3>Squareflair</h3>
                                        <h4>@Squareflair</h4>
                                        </div>
                                    </article>
                                </Grid>
                        <Grid item className="testItem">
                                    <p>”@OpenPhoneApp love the transcript feature on voicemails, makes it super quick and easy to pull the key info out, such as prices and contact details! We're using openphone.co and love it! Way better than Google Voice, which we switched from. Plus, they are actually improving their product every day and listen to our feedback, unlike Google Voice.”</p>
                                    <article>
                                        <img src="https://images.ctfassets.net/4dn1hy7dfehz/1SqsI9h2elFwaTGW0apz5q/24c659b2bd5387f8e337900fc1ad909a/terry-clarke.png" alt="" />
                                        <div>
                                        <h3>Terry Clarke</h3>
                                        <h4>Co-founder at Buildstream Team</h4>
                                        </div>
                                    </article>
                                </Grid>   
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} className="review" style={{marginTop: '15vh'}}>
                    <Grid container justify="space-between">
                        <Grid item xs={3}>
                            <article>
                                <img src="https://www.openphone.co/images/logo-app-store.svg" alt="" />
                                <h3>"Seriously, why is it THIS good?"</h3>
                                <img className="rating" src="https://www.openphone.co/images/rating.svg" alt="" />
                                <a href="">1,611 Reviews</a>
                            </article>
                        </Grid>
                        <Grid item xs={3}>
                            <article>
                                <img src="https://www.openphone.co/images/logo-g2com.png" alt="" />
                                <h3>"Much more than a business phone. Better contacts, better relationships, better business."</h3>
                                <img className="rating" src="https://www.openphone.co/images/rating.svg" alt="" />
                                <a href="">115 Reviews</a>
                            </article>
                        </Grid>
                        <Grid item xs={3}>
                            <article>
                                <img src="https://www.openphone.co/images/logo-capterra.svg" alt="" />
                                <h3>"Powerful, reliable, simple to use! It works."</h3>
                                <img className="rating" src="https://www.openphone.co/images/rating.svg" alt="" />
                                <a href="">26 Reviews</a>
                            </article>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} style={{marginTop: '10vh', textAlign: 'center'}}>
                    <h2 style={{fontSize: '3rem'}}>Best in class business phone</h2>
                    <p style={{marginTop: '-2rem'}}>As rated by you on G2.</p>
                </Grid>
                <Grid item xs={9}>
                    <Grid container justify="space-around">
                        
                    <Grid item className="awards">
                            <h3>Leader</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Leader Small Business</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Best Results</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Easiest Setup</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Best Relationship</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Best Support</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Easiest To Do Business With</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Most Implementable</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Best Usability</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Easiest To Use</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Best Meets Requirements</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    <Grid item className="awards">
                            <h3>Easiest Admin</h3>
                            <article>
                                <div className="shield">
                                <img src="https://www.openphone.co/images/bg-achievement.png" alt="" className="shieldIcon" />
                            <img src="https://www.openphone.co/images/achievement.png" alt="fall 2020" />
                             
                            <p>fall 2020</p>   </div>
                            </article>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className="trial"><button>Start free trial</button></Grid>
            </Grid>
        )
    }
}
