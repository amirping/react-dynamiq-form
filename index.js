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
    if(ev.target.id === 'max' && (parseInt(ev.target.value)<this.state.min)){
      alert('max must be MAX ha m3alem')
      
    }
    else {

       this.setState({
      [ev.target.id]:parseInt(ev.target.value)
    })
    }
   
  }
  handleSeeting = (ev) => {
    if(this.state.max < this.state.min){
       let arr  = this.fillArray(this.state.min)
      this.setState({
        max:this.state.min,
         inputs:arr
      })
    }
    
    if(ev.target.id === 'max'){
      if(parseInt(ev.target.value)>this.state.min )
      {
        let arr  = this.fillArray(parseInt(ev.target.value))
      
      this.setState({
        inputs:arr
      })
      }
      
    }

    
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
            <input key={key} id={key} name={key} type='number' placeholder='fuck nahdha w nida' />
          )
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
