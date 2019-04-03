import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max:0,
      inputs:[]
    };
  }
  handleChange = (ev) => {
    this.setState({
      [ev.target.id]:parseInt(ev.target.value)
    })
  }
  handleSeeting = (ev) => {
    if(this.state.max < this.state.min){
      this.setState({
        max:this.state.min
      })
    }
    if(ev.target.id === 'max'){
      let arr  = this.fillArray(parseInt(ev.target.value))
this.setState({
      inputs:arr
    })
    }
    // let size = 0 ; 
    // ev.target.id === 'max' ? size=parseInt(ev.target.value) : size = this.state.min
    
    console.log(this.state)
  }

  fillArray = (size) => {
    var arr = []
    for(var x =0;x<size;x++){
      arr.push('c-'+x)
    }
    return arr
  }

  render() {
    return (
      <div>
        <p>
         Amir will code that :) 
        </p>
        <br/>
        Min
        <input type='number' id='min' onChange={this.handleChange} onBlur={this.handleSeeting} value={this.state.min}/><br/>
        Max
        <input type='number' onBlur={this.handleSeeting} id='max' onChange={this.handleChange} value={this.state.max}/>
        <hr/>
        {this.state.inputs.map((key)=>{
          return (
            <input id={key} name={key} type='number' />
          )
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
