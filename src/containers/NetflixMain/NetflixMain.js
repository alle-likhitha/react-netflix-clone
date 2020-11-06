import React, { Component } from 'react';

import MainInfo from '../../components/MainInfo/MainInfo';
import classes from './NetflixMain.module.css';
import MyList from '../../components/MyList/MyList';
import Popup from '../../components/PopUp/Popup';
import Model from '../../ui/Model/Model';

import axios from 'axios';
class NetflixMain extends Component{

    state = {
        mylistNames:{
            Mylist: 'My List',
            popular: 'Popular on Netflix',
            newReleases: 'New Releases',
            tvshows: 'TV Shows'
        },
        search : false,
        Onclick : false,
        data : null,
        showdata : null
    }
    componentDidMount(){
        this.DataFetchHandler()
    }
    OnClickedHandler = (id) =>{
    let x = !this.state.Onclick
    console.log(id)
    console.log("clickeddd",x)
    for(let i in this.state.data){
        // console.log(this.state.data[i])
        if(this.state.data[i]._id === id){
            console.log(this.state.data[i])
            this.setState({showdata: this.state.data[i] })
            break
        }

    }
    this.setState({Onclick: x})
    
    }
    cancelOrderHandler = () =>{
        this.setState({Onclick:false});
    }

    DataFetchHandler = props =>{
        axios.get("http://localhost:9000/main/get-all")
        .then( res =>{
            console.log(res)
            const fetched = [];
            for(let key in res.data){
                fetched.push( {
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({data : fetched[0]})
            console.log(typeof(fetched))
            console.log(Array.isArray(fetched))
            // console.log(this.state.data[0].Title)
            console.log(Array.isArray(this.state.data))
        })
    }

    render(){
        let x = null
        let list = null
        if(this.state.data){
        list = Object.keys(this.state.mylistNames)
        .map(igKey =>{
            x += 6
            const mydata = []
            for(var i = x; i < x+6; i++){
                mydata.push(this.state.data[i])
            }
            // console.log(mydata)
            setTimeout(
                2000
            )
            console.log(mydata)

            return <MyList key = {igKey} type={this.state.mylistNames[igKey]} showup={this.OnClickedHandler} data = {mydata} />
        })
        }
        
        let discription = null;
        if(this.state.Onclick && this.state.showdata){
            discription = <Popup data = {this.state.showdata}/>
        }
        // .map(igKey => {
        //     return [...Array(this.state.mylistNames[igKey] )].map((_,i) => {
        //         return <MyList key = {igKey+i} type={igKey} />
        //     });
        // })
        // .reduce((arr,el)=>{
        //     return arr.concat(el)
        // },[]);

        return(
            <div className={classes.NetflixMain}>
                <Model show={this.state.Onclick} modelClosed={this.cancelOrderHandler}>
                    {discription}
                </Model>
                
                <MainInfo />
        {/* <p>{this.state.data[0]}</p> */}
                {list}
            </div>

        );
    }
}

export default NetflixMain;