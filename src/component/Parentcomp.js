import React, { Component } from 'react'
import Regularcomp from './Regularcomp';
import Purecomponent from './Purecomponent';
import Memocomp from './Memocomp';

class Parentcomp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'Narayani'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Narayani'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Component!!!')
        return(
            <div>
                Parent Component
                {/* <Regularcomp name={this.state.name}></Regularcomp> */}
                {/* <Purecomponent name={this.state.name}></Purecomponent> */}
                <Memocomp name={this.state.name} />
            </div>
        )
    }
}
export default Parentcomp