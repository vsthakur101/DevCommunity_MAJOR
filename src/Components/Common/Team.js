import React,{Component} from 'react'
import {Badge,Card,CardImg, Button} from "react-bootstrap"
import VS from "./TeamPics/VS.jpeg";
import Tushar from "./TeamPics/Tushar.jpeg"
import Anonymous from "./TeamPics/Anonymous.jpg"
import Akshay from "./TeamPics/Akshay.jpeg"
import Anonymous from "./TeamPics/Anonymous.jpg"
import Octicon, { getIconByName } from "@githubprimer/octicons-react";
import {CopyToClipboard} from 'react-copy-to-clipboard';


class Team extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       copied:null
    };
  };
  render()
 { return (
    <div>
    <div>
    <h3 class="w3-center">THE CORE TEAM</h3>
        <p class="w3-center w3-large">The ones who runs this site behind the scenes</p>
    </div>
    <div className="row">
   
    <Card style={{width:"22rem"}} className=" ma2">
    <CardImg variant="top" src={VS} />
    <Card.Body>
    <h3>VIDHYA SAGAR THAKUR</h3>
    <h6>Popularly known as</h6><Badge variant="info">VS THAKUR</Badge>
    <p class="w3-opacity">Team Lead</p>
    {
    // <p>An ambivert coder who developes crush on every girl he sees</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/vsthakur101" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="vsthakur.it0@gmail.com" onCopy={() => this.setState({copied:1})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="8448871841" onCopy={() => this.setState({copied:2})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===1? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===2? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Tushar}/>
    <Card.Body>
    <h3>Keshava Pranath K</h3>
    <h6>Popularly known as</h6><Badge variant="info">The unstoppable orator</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>An extreme extrovert who will start explaining concepts even if the person listening to him is not interested</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/TusharGodyal" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="tushargodyal1999@gmail.com" onCopy={() => this.setState({copied:3})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="7000000000" onCopy={() => this.setState({copied:4})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===3? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===4? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
   
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Anonymous}/>
    <Card.Body>
    <h3>Abhishek S</h3>
    <h6>Popularly known as</h6><Badge variant="info">Helping Hand</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>A Boss personality who can burn each and everyone in the room with just a sentence</p>
    }       
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/vsthakur101" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="vsthakur.it0@gmail.com" onCopy={() => this.setState({copied: 5})}>
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="8448871841" onCopy={() => this.setState({copied: 6})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===5? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===6? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
   
    </Card.Body>
    </Card>

    <Card  style={{width:"22rem"}} className="ma2">
    <CardImg variant="top" src={Akshay} />
    <Card.Body>
    <h3>Lakshya Sharma</h3>
    <h6>Popularly known as</h6><Badge variant="info">Genetic algorithm forever</Badge>
    <p class="w3-opacity"></p>
    {
    // <p>The Laughing Buddha who solves all the problems in the world with his genetic algorithm</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/AkshayBora" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    
    <CopyToClipboard text="akshaybora5@gmail.com" onCopy={() => this.setState({copied:7})} >
    <Button variant="dark" className="mh2 rounded-circle" title="click to copy to clipboard">
    <Octicon icon={getIconByName("mail")}/>
    </Button>
    </CopyToClipboard>
    <CopyToClipboard text="98000000000" onCopy={() => this.setState({copied:8})}>
    <Button variant="dark" className="mh2 rounded-circle">
    <Octicon icon={getIconByName("device-mobile")} />
    </Button> 
    </CopyToClipboard>
    
    </div>
    </div>
    {this.state.copied===7? <i class="fa fa-facebook-official" aria-hidden="true">email copied</i>:null}
    {this.state.copied===8? <i class="fa fa-facebook-official" aria-hidden="true">phone copied</i>:null}
    </Card.Body>
    </Card>

    </div>
    <div className="row">
    <h3 className="w3-center">CONTRIBUTORS</h3>
    </div>
    <div className="row">
    
    <div className="row ma1">
    <Card style={{width:"22rem"}} className=" ma2">
    <CardImg variant="top" src={Anonymous} />
    <Card.Body>
    <h3>Rushikesh C</h3>
    <h6>Popularly known as</h6><Badge variant="info">Helping Hand</Badge>
    <p class="w3-opacity">Beta Tester</p>
    {
    // <p>Fit Traveller who codes while travelling and sleeps with protein cans to fullfill his dream of bulking up</p>
    }
    <div className="row">
    <div className="center">
    <a className="mh2 btn btn-dark rounded-circle" href="https://github.com/" target="_blank">
    <Octicon icon={getIconByName("mark-github")}/>
    </a>
    </div>
    </div>
    
    </Card.Body>
    </Card>
    </div>

    </div>
    </div>

  )}
}
export default Team
