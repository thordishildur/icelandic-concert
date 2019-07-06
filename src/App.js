import React, { Component } from 'react'
import './App.css';
import ConcertItem from './ConcertItem'
import './index.css';

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://apis.is/concerts'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results,
        })
      })
  }
  
  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <ConcertItem key={index} concert={entry}></ConcertItem>
    }) 

    return <ul>{result}</ul>
  }
}

export default App;
