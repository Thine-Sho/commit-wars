import React from 'react';
import logo from './logo.svg';
import './users/accounts.json';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {name: "Jahi"};
  }


  render()
  {
    return(
      <div>
        Hello {this.state.name}
      </div>
    );
  }
}

export default App;
