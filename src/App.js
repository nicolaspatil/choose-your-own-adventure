import { Component } from 'react';
import './App.css';
import { story } from "./data"
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';

class App extends Component{

  state = {
    backgroundColor:"",
    textColor:"",
    prompt:"",
    choices:[]
  }

  componentDidMount(){
    this.setSituation("introa")
  }

  render(){return(
    <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
      <div className="header" style={{color: this.state.textColor}}>
        <header>Nicolas Patil</header>
        <header>ELIT22 Final</header>
      </div>
      <div className="content-wrapper">
        <div className="prompt-wrapper">
          <p className="prompt" style={{color: this.state.textColor}}>{this.state.prompt}</p>
        </div>
        <div className="choice-wrapper">
          {this.state.choices}
        </div>
      </div>
    </div>
  );
}

  setSituation(destination){
    let newSituation = story[destination]
      
    //Set background color and text color
    this.setState({backgroundColor: newSituation.backgroundColor})
    this.setState({textColor: "#FFFFFF"})
    
    //Set prompt
    this.setState({prompt: newSituation.prompt})

    //Iterate through choices to make choiceItems
    this.setState({choices:[]})
    var newItems = []
    console.log(newSituation.textColor)
    newSituation.choices.forEach(element => {
      const item = <Button variant="outlined" style={{color: "#FFFFFF", textTransform: 'none', borderColor: "#FFFFFF", padding:'1vh', margin:'2vh', fontSize: '1em'}} key={element.text} onClick={() => this.setSituation(element.destination)}>{element.text}</Button>
      newItems.push(item)
    });
    this.setState({choices: newItems})

  } 
}

export default App