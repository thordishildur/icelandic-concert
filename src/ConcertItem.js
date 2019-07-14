import React, {Component} from 'react'
import './ConcertItem.css';

class ConcertItem extends Component {
    state = {
        selected: false
    }

    prettyDate (date) {
        const dateObject =  Date.parse(date)
        return new Intl.DateTimeFormat('en-GB', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit',
          hour: 'numeric',
          minute:'numeric'
        }).format(dateObject)
    }

    onClick() {   
        this.setState({selected: !this.state.selected})
    }

    render () {
        let text = null;
        if(this.state.selected) {
            text = (<p>{this.props.concert.eventHallName}</p>)
        } else {
            text = (<p>{this.prettyDate(this.props.concert.dateOfShow)}</p>)
        }
        return (
        <li className="concertItem" onClick={this.onClick.bind(this)} >
                <img src={this.props.concert.imageSource} alt=""/>
                <div className="eventDescription">
                    <h5>{this.props.concert.eventDateName}</h5>
                    <p>{text}</p>
                </div>
        </li>
        )
    }
}

export default ConcertItem