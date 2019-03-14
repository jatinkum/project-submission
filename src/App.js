import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndex:0,
      jokes:[
        {
          "ques":"What kind of bagel can fly?",
          "ans":"A plain bagel",
          "isFunny":""
        },
        {
          "ques":"How is imitation like a plateau?",
          "ans":"They’re both the highest form of flattery",
          "isFunny":""
        },
        {
          "ques":"What's the best thing about living in Switzerland?",
          "ans":"I don’t know, but the flag is a big plus",
          "isFunny":""
        },
        {
          "ques":"What did the pirate say when he turned 80?",
          "ans":"Aye matey!",
          "isFunny":""
        },
        {
          "ques":"Why can’t bicycles stand up on their own?",
          "ans":"They’re too tired",
          "isFunny":""
        }
      ]          
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.yay = this.yay.bind(this);
    this.nay = this.nay.bind(this);

  }
  incrementCounter(){
    debugger;
    if(this.state.currentIndex<this.state.jokes.length-1){
      var currentIndexCopy = this.state.currentIndex;
      currentIndexCopy=currentIndexCopy+1;
      this.setState({
        currentIndex:currentIndexCopy
      })      
    }else{
      this.setState({currentIndex: 0})
    }    
  }
  decrementCounter(){    
    if(this.state.currentIndex>0){
      var currentIndexCopy = this.state.currentIndex;
      currentIndexCopy=currentIndexCopy-1;
      this.setState({currentIndex: currentIndexCopy})
    }else{
      this.setState({currentIndex: this.state.jokes.length-1})
    }    
  }
  yay(){    
    var currentStateJokes = this.state.jokes;
    var currentIndexCopy=this.state.currentIndex;
    currentStateJokes[currentIndexCopy].isFunny='true';
    this.setState({jokes:currentStateJokes});
    
  }
  nay(){
    var currentStateJokes = this.state.jokes;
    var currentIndexCopy=this.state.currentIndex;
    currentStateJokes[currentIndexCopy].isFunny='false';
    this.setState({jokes:currentStateJokes});
    debugger;
  }
  render() {
    
    return (
      <div className="App">
        <div>{this.state.jokes[this.state.currentIndex].ques}</div>
        <div>{this.state.jokes[this.state.currentIndex].ans}</div>
        <button onClick={this.nay}>Booo</button>
        <button onClick={this.yay}>Funny</button>
        <br></br>
        <span className="cursor" onClick={this.decrementCounter}>Prev   </span>
        <span className="cursor" onClick={this.incrementCounter}>    Next</span>
        <ul>
          {  this.state.jokes.map((filterItem) => {
          return (
                    <div className={`${filterItem.isFunny==''  ? 'NotHighlight' : 'Highlight'}`}><li key={filterItem.ques}>
                        <span>{filterItem.ques}{filterItem.isFunny}</span>
                    </li></div>
                  );
              })
          }
        </ul>
      </div>
    );
  }
}

export default App;
