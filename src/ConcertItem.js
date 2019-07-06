import React, {Component} from 'react'

class ConcertItem extends Component {


    render () {
        return <img src={this.props.concert.imageSource} alt=""/>
    }
}

export default ConcertItem