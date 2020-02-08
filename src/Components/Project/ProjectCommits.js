import React, { Component } from 'react';
import Spinner  from "../Common/Spinner";
import axios from "axios";
class ProjectCommits extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data:null,
        isLoading:false,
        clientId:'3e1adc2a9e666a3148a2',
        clientSecret: '63243c0a847e36688569d3dc4211c717befa43ae',
      };
    };
    
    componentWillMount(){
        this.setState({isLoading:true});
        const {clientId,clientSecret} = this.state;
        let arr = this.props.project.githublink.split('/');
        axios.get(`https://api.github.com/repos/${arr[arr.length-2]}/${arr[arr.length-1]}/commits?client_id=${clientId}&client_secret=${clientSecret}
        `).then(obj=>{
            console.log(obj.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}

export default ProjectCommits;
