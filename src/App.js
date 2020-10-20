import React from 'react';

import './App.css';

class App extends React.Component{
  state={
    firstName:'',
    lastName:'',
    isFriendly:false,
    favColor:'red',
    gender:''
  }
  handleChange = (event)=>{
  const {name,value, type,checked} = event.target;
  type==='checkbox'?this.setState({[name]:checked}):this.setState({[name]:value})
  
  }
  handleSubmit = (e)=>{
  e.preventDefault();
  console.log("submitted successfully")
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Form</h3>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange}/>
        <br/>
        <input type='text' value={this.state.lastName} name='lastName'  placeholder='Last Name' onChange={this.handleChange}/>  
        <br />
        <textarea name = 'textarea' value={"Some default value"} onChange={this.handleChange}/>
        <br/>
        <label>
        <input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange}/>Is friendly?
        </label>
        <br/>
        <label>
        <input type='radio' name='gender' value='male' checked ={this.state.gender==='male'} onChange={this.handleChange}/>Male
        </label>
        <br/>
        <label>
        <input type='radio' name='gender' value='female' checked ={this.state.gender==='female'} onChange={this.handleChange}/>Female
        </label>
        <br />
        <label>Favorite color:</label>
        <select 
        value={this.state.favColor}
        onChange={this.handleChange}
        name='favColor'
        >
         <option value="red">Red</option>
         <option value="blue">Blue</option>
         <option value="yellow">Yellow</option>
         <option value="orange">Orange</option>
         <option value="green">Green</option>
        </select>
        <h1>{this.state.firstName}{this.state.lastName}</h1>
       {this.state.gender &&
          <h2>your gender is {this.state.gender}</h2> 
       }
       
         <h2>your favorite color is {this.state.favColor}</h2>
      <button>Submit</button>
      </form>
      </header>
      
    </div>
  );
}
}
export default App;
