import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Spinner from '../Common/Spinner'
import axios from 'axios';
class ProfileGithub extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clientId:'3e1adc2a9e666a3148a2',
         clientSecret: '63243c0a847e36688569d3dc4211c717befa43ae',
         count: 5,
         sort:'created: asc',
         repos: [],
         isLoading:false
      }
    }
    componentDidMount(){
        const {username} = this.props;
        this.setState({isLoading:true})
        const {count, sort, clientId ,clientSecret} = this.state;
        if(username){
        axios.get(
            `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
          ).then(data=>{
               console.log(data);
            
              if(this.refs.myRef){
                this.setState({ repos: data.data,isLoading:false });
              }
           })
           .catch(err=>console.log(err));
          }
    }   
    componentWillUnmount(){
      this.setState({repos:[]})
    }
  render() {
    const { repos,isLoading } = this.state;
    const {username} = this.props;
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      
        <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {isLoading?<Spinner/>:repoItems}
      </div>
      
    )
  }
}
export default ProfileGithub;