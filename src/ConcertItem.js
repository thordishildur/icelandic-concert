import React, {Component} from 'react'
import './ConcertItem.css';

class ConcertItem extends Component {

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

    render () {
        return (
        <li className="concertItem">
                <img src={this.props.concert.imageSource} alt=""/>
                <div class="eventDescription">
                    <h4>{this.props.concert.eventDateName}</h4>
                    <p>{this.prettyDate(this.props.concert.dateOfShow)}</p>
                </div>
        </li>
        )
    }
}

export default ConcertItem