import React, { Component } from 'react';
import MyList from '../../components/MyList/MyList';
import classes from './TvShows.module.css'
import axios from 'axios';
import Popup from '../../components/PopUp/Popup';
import Model from '../../ui/Model/Model';

class TvShows extends Component{
    state = {
        data : null,
        showdata : null,
        Onclick : false
    }

    componentDidMount(){
        this.DataFetchComedy()
    }
    cancelOrderHandler = () =>{
        this.setState({Onclick:false});
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
    DataFetchComedy = props =>{
        axios.get("http://localhost:9000/main/get-by-category?category="+this.props.cat)
        .then( res =>{
            console.log(res.data)
            console.log(typeof(res))
            const fetch = [];
            for(let key in res.data){
                fetch.push( [
                    ...res.data[key]
                ])
            }
            this.setState({data : fetch[0]})
            console.log(typeof(fetched))
            console.log(Array.isArray(fetch))
            console.log(this.state.data)
            console.log(Array.isArray(this.state.data))
        })
    }

    
    render(){
        let discription = null;
        if(this.state.Onclick && this.state.showdata){
            discription = <Popup data = {this.state.showdata}/>
        }
        return(
            <div className={classes.TvShows}>
                <Model show={this.state.Onclick} modelClosed={this.cancelOrderHandler}>
                    {discription}
                </Model>
        <h1 style={{margin:'100px 0 0 0', textAlign:'center', color:'white'}}>{this.props.cat}</h1>
            <MyList type={'Tv Shows with '+this.props.cat +' Genre'} data = {this.state.data} lala={{height:"1000px"}}  showup={this.OnClickedHandler}></MyList>
            </div> 
            
        );
    }

}

export default TvShows;