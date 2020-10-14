import React,{Component} from 'react';
import classes from './Auth.module.css';
import Tvphoto from '../../assets/images/loginpage.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
class Auth extends Component{
    state = {
        questions:[
            "What is Netflix?",
            "How much does Netflix cost?",
            "Where can I watch?",
            "How do I cancel?",
            "What can I watch on Netflix?"
        ],
        answers:[
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br/ >You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
            "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."

        ]
    }
    render(){

        let qands = this.state.questions.map(qes =>{
            return(
                <div >
                    <button className={classes.But}><h2 style={{display:"flex", justifyContent:"space-between"}}>{qes} <AiOutlinePlus size='30px'/></h2></button> 
                </div>
            )
        })
        return(
            <div className={classes.Auth}>
                <div className={classes.Textdiv}>
                <p style={{fontSize:"50px", fontWeight:"bold", margin:"30px"}}>Unlimited movies, TV <br /> shows and more.</p>
                <p style={{fontSize:"25px", margin:"20px"}}>Watch anywhere, Cancel anytime.</p>
                {/* <br />
                <br /><br /><br /> */}
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className={classes.Nextdiv}>
                    <div style={{width:"50%", padding:"40px", display:"flex", flexDirection:"column",justifyContent:"center", textAlign:"left"}}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Enjoy on your TV. </p>
                        <p style={{fontSize:"30px"}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <img style={{height:"200px", width:"40%"}} src={Tvphoto} alt='netflix in tv' />
                </div>
                <div className={classes.Nextdiv}>
                <img style={{height:"200px", width:"40%"}} src={Tvphoto} alt='netflix in tv' />
                    <div style={{width:"50%", padding:"40px", display:"flex", flexDirection:"column",justifyContent:"center", textAlign:"left"}}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Download your shows to watch offline. </p>
                        <p style={{fontSize:"30px"}}>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className={classes.Nextdiv}>
                    <div style={{width:"50%", padding:"40px", display:"flex", flexDirection:"column",justifyContent:"center", textAlign:"left"}}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Watch everywhere. </p>
                        <p style={{fontSize:"30px"}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <img style={{height:"200px", width:"40%"}} src={Tvphoto} alt='netflix in tv' />
                </div>
                <div className={classes.Quesdiv}>
                    <h1>Frequently Asked Questions</h1>
                    <div className={classes.Innerdiv}>
                        {qands}
                    </div>
                </div>

            </div>
        );
    }
}
export default Auth;