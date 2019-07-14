import React, { Component } from 'react'
import './App.css';
import ConcertItem from './ConcertItem'
import './index.css';
import DatePicker from './DatePicker';

class App extends Component {
  state = {
    data: [],
    from: undefined,
    to: undefined
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

  onChange(to, from) {
    this.setState( {
      from: from,
      to: to
    })
  } 

  filter(concertItem) {
    const dateOfShow =  Date.parse(concertItem.dateOfShow);
    const from = this.state.from;
    const to = this.state.to;
    if(from === undefined || to === undefined) {
      return true;
    }
    from.setHours(0,0,0,0);
    to.setHours(23,59,59,0);

    if(from <= dateOfShow && to >= dateOfShow && from !== undefined && to !== undefined) {
      return true;
    }
    return false;
  }
  
  render() {
    const { data } = this.state

    const result = data.filter(this.filter.bind(this)).map((entry, index) => {
      return <ConcertItem key={index} concert={entry}></ConcertItem>
    }) 

    return (
      <div>
      <h1>Íslenzkir tónleikar</h1>
      <DatePicker onChange={this.onChange.bind(this)} from={this.state.from} to={this.state.to}/>
      <div className="parentDiv">
        <ul>{result}</ul>
      </div>
      </div>
    )

  }
}

export default App;
