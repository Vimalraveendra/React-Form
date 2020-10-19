import React from 'react';

import './App.css';

class App extends React.Component{
  state={
    firstName:'',
    lastName:'',
  }
  handleChange = (event)=>{
  const {name,value} = event.target;
  this.setState({[name]:value})
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Form</h3>
        <form>
        <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange}/>
        <br/>
        <input type='text' value={this.state.lastName} name='lastName'  placeholder='Last Name' onChange={this.handleChange}/>  
        <br />
        <textarea />
        <h1>{this.state.firstName}{this.state.lastName}</h1>
      </form>
      </header>
      
    </div>
  );
}
}
export default App;
