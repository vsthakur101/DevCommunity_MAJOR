import React, { Component } from 'react'
import axios from "axios";
import Spinner from '../Common/Spinner';
import OwnerDetails from './SubComponents/OwnerDetails';
export default class RepoOwner extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:null,
         clientId:'3e1adc2a9e666a3148a2',
         clientSecret: '63243c0a847e36688569d3dc4211c717befa43ae',
         count: 5,
         sort:'created: asc',
         isLoading:false
      }
    }
    componentWillMount(){
        this.setState({isLoading:true})
        const {username,clientId,clientSecret} = this.state
        let arr = this.props.projectlink.githublink.split('/');
        axios.get(`
        https://api.github.com/users/${arr[arr.length-2]}?client_id=${clientId}&client_secret=${clientSecret}
        `).then(obj=>{
            this.setState({data:obj.data,isLoading:false})
            console.log(obj.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    
  render() {
      let view;
      const {isLoading,data}=this.state
      if(isLoading){
          view=<Spinner />
      }else{
          if(data){
              view=<OwnerDetails details={this.state.data}/>
          }else{
              view=<p>doesnt exist</p>
          }
      }
    return (
      <div className="mv2">
        {view}
      </div>
    )
  }
}
