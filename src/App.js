import { Component } from 'react';
import './App.css';
import { story } from "./data"

class App extends Component{
  state = {
    backgroundColor:"",
    textColor:"",
    prompt:"",
    choices:[]
  }
  componentDidMount(){
    this.setSituation("a")
  }

  render(){return(
    <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
      <div className="header">
        <header>ELIT22 Final</header>
      </div>
      <div className="content-wrapper">
        <div className="prompt-wrapper">
          <p>{this.state.prompt}</p>
        </div>
        <div className="choice-wrapper">
          {this.state.choiceItems}
        </div>
      </div>
    </div>
  );
}

  setSituation(destination){
    let newSituation = story[destination]
      
    //Set background color and text color
    this.setState({backgroundColor: newSituation.color})
    this.setState({color: newSituation.textColor})
    
    //Set prompt
    this.setState({prompt: newSituation.prompt})
    console.log("New prompt: " + this.state.prompt)

    //Iterate through choices to make choiceItems
    var newItems = []
    newSituation.choices.forEach(element => {
      const item = <button key={element.destination} onClick={() => this.setSituation(element.destination)}>{element.text}</button>
      newItems.push(item)
    });
    this.setState({choiceItems: newItems})
    console.log("Navigating to: " + destination)
    document.body.style = "background:" + this.state.backgroundColor
  } 
}

export default App