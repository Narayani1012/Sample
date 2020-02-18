import React, { PureComponent } from 'react'

class Purecomponent extends PureComponent {
    render() {
        console.log('Purecomponent')
        return(
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
export default Purecomponent