import React, { Component } from 'react'

const myelement = <div brand="Ford" />;

class Eventbinds extends Component {
    render() {
        return(
            <div>Hello {this.props.brand}</div>
        )
    }
}

export default Eventbinds