import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        title: 'Business website',
        category: 'web design'
      },
      {
        title: 'Social website',
        category: 'mobile developement'
      },
      {
        title: 'Ecom website',
        category: 'web design'
      }
    ]})
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
