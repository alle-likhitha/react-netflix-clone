import React,{Component} from 'react';
import classes from './Auth.module.css';
import First from '../../assets/images/first.png';
import Second from '../../assets/images/second.png';
import Third from '../../assets/images/third.png';

import {FiPlus} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Formdata from '../../components/Signin/Formdata';
import Model from '../../ui/Model/Model';
import Alldetails from '../../components/Signin/Alldetails';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. \n You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
            "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."

        ],
        clicked: [true,null],
        continueSignup: false,
        userdata: {
            email:null,
            password:null,
            name:null,
            phone:null,
            dateofbirth:null
        },
        redirect:null,
        error: null


    }
    // submitSignHandler = (props ) => {
        submitSignHandler = ( email, password, isSignup ) => {
        console.log("kjhsdbksjhbdkjhsbdallelllllllll")
        console.log(isSignup)
        // event.preventDefault();
        if (isSignup) {
            // const upstate = updateObject(this.state.userdata,{
            //     email:email,
            //     password:password,
            // })
            // this.setState({userdata:upstate})
            this.setState({userdata:{
                ...this.state.userdata,
                email:email,
                password:password
            }})
            console.log(this.state.userdata.email)
            this.OnContinueHandler()
        }
        // this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
        // else{
        //     const queryparams = '?email=' +email+'&password='+password
        //     axios.get('http://localhost:9000/login/verify-login'+queryparams)
        //     .then(response => {
        //         console.log(response)
        //         if (response.data.data){

        //             // dispatch(setAuthRedirectPath('/med', email))
        //         }else{
        //             // dispatch(authFail(response.data.error));
        //         }
        //     })
        // }
        
    }
    authSignup = (name, phone, dob) =>{
        // event.preventDefault();
        this.setState({userdata:{
            ...this.state.userdata,
            name:name,
            phone:phone,
            dateofbirth:dob
        }}, this.authPost)
        console.log(this.state.userdata)
    }
    authPost = () =>{
        // if(this.state.userdata.dateofbirth){
        axios.post('http://localhost:9000/login/signup-user', this.state.userdata)
        .then(response => {
            console.log(response)
            if (response.data.data){
                    console.log(response)
                    this.setState({redirect:"/"})

            }
        })
        .catch(err =>{
            console.log(err)
            this.setState({error:err})
        })
    }
    // AuthRedirect=()=>{

    // }

    OnQClickHandler = props =>{
        console.log("kasydgjuhsgd",props)
        let cha = [true, props]
        this.setState({clicked:cha})
    }
    cancelOrderHandler = () =>{
        this.setState({continueSignup:false});
    }
    OnContinueHandler = () =>{
        // event.preventDefault();
        console.log(this.state.userdata.email)
        console.log("lala continue clicked")
        this.setState({continueSignup:true});
    }
    render(){
        console.log(this.state.userdata)
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        let err = null
        if(this.state.error){
        err = <h4>{this.state.err}</h4>
        }
        let qands = this.state.questions.map(qes =>{
            // console.log(this.state.questions.indexOf(qes))
            let x = this.state.questions.indexOf(qes)
            // console.log(this.state.clicked)
            if(this.state.clicked[1] === x){
                let ans = this.state.answers[x].split("\n").map(str => <p key={str[0]+str[6]}>{str}</p>);
                // console.log(ans)
                return(
                    <div key={x+"ans"}>
                        <button className={classes.But} onClick={() => this.OnQClickHandler("null")}><p style={{display:"flex", fontSize:"25px", paddingLeft:"30px", justifyContent:"space-between"}}>
                        {qes} <FiX size='30px'/></p></button> 
                        <div key={x+"lala"} className={classes.Butpara} >
                        {ans}</ div>
                </div>
                )
            }
            else{
                return(
                    <div key={x+"qes"}>
                        <button className={classes.But} onClick={() => this.OnQClickHandler(x)}><p style={{display:"flex", fontSize:"25px", paddingLeft:"30px", justifyContent:"space-between"}}>
                            {qes}<FiPlus size='30px'/></p></button> 
                    </div>
                )
            }
            
        })
        let details = null
        if(this.state.continueSignup){
            details = <Alldetails authsignup = {this.authSignup}/>
        }
        return(
            <div className={classes.Auth}>
                <Model show={this.state.continueSignup} modelClosed={this.cancelOrderHandler}>
                {/* <Model show = {true}> */}
                    {details}
                </Model>
                <div className={classes.Textdiv}>
                <p style={{fontSize:"50px", fontWeight:"bold", margin:"30px"}}>Unlimited movies, TV <br /> shows and more.</p>
                <p style={{fontSize:"25px", margin:"20px"}}>Watch anywhere, Cancel anytime.</p>
                {/* <br />
                <br /><br /><br /> */}
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <br />
                <br />
                {err}
                <Formdata onSubmit = {this.submitSignHandler} />
                <br />
                <div style={{width:"350px", display:"flex", flexDirection:"row", justifyContent:"space-evenly", margin:"0 auto"}}>
                {/* <NavLink to="/auth/signup" className={classes.Nav}>Sign Up</NavLink> */}
                <p>Already a user! Please </p>
                <NavLink to="/auth/login" className={classes.Nav}>Log in</NavLink>
                </div>
                </div>
                
                <div className={classes.Nextdiv}>
                <div className={classes.Divinnext}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Enjoy on your TV. </p>
                        <p style={{fontSize:"30px"}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <img style={{height:"300px", width:"40%", paddingTop:"50px"}} src={First} alt='netflix in tv' />
                </div>
                <div className={classes.Nextdiv}>
                <img style={{height:"300px", width:"40%", paddingTop:"50px"}} src={Second} alt='netflix in tv' />
                <div className={classes.Divinnext}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Download your shows to watch offline. </p>
                        <p style={{fontSize:"30px"}}>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className={classes.Nextdiv}>
                    <div className={classes.Divinnext}>
                        <p style={{fontSize:"50px", fontWeight:"bold", margin:"none"}}> Watch everywhere. </p>
                        <p style={{fontSize:"30px"}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <img style={{height:"300px", width:"40%", paddingTop:"50px"}} src={Third} alt='netflix in tv' />
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