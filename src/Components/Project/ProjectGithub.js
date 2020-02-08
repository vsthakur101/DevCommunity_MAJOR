import React, { Component } from 'react'
import Axios from 'axios';
import Spinner from '../Common/Spinner';
import ProjectDetails from './ProjectDetails';
class ProjectGithub extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:null,
       isLoading:false,
       clientId:'3e1adc2a9e666a3148a2',
       clientSecret: '63243c0a847e36688569d3dc4211c717befa43ae'
    }
  }
  
  componentWillMount(){
    let arr = this.props.projectlink.githublink.split('/');
    const {clientId,clientSecret} = this.state;
    this.setState({isLoading:true});
    Axios.get("https://api.github.com/repos/"+arr[arr.length-2]+"/"+arr[arr.length-1]+`?client_id=${clientId}&client_secret=${clientSecret}`)
    .then(obj=>{
      let dat={
        owner:obj.data.owner,
        name:obj.data.name,
        isPrivate:obj.data.private,
        gitUrl:{
          git_url: "git://github.com/vsthakur101/DevCommunity.git",
          ssh_url: "git@github.com:vsthakur101/DevCommunity.git",
          clone_url: "https://github.com/vsthakur101/DevCommunity.git",
          svn_url: "https://github.com/vsthakur101/DevCommunity"
        },
        description:obj.data.description,
        size:obj.data.size,
        watchers_count:obj.data.watchers_count,
        language:obj.data.language
      }

      this.setState({data:dat,isLoading:false});
    })
  }
  render() {
    return (
      <div className="row mh2">
      {this.state.isLoading?<Spinner/>:<ProjectDetails data={this.state.data}/>}
      </div>
    )
  }
}

export default ProjectGithub;