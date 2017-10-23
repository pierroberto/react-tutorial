import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business website',
          caytegory: 'web design'
        },
        {
          title: 'Social website',
          caytegory: 'mobile developement'
        },
        {
          title: 'Ecom website',
          caytegory: 'web design'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
