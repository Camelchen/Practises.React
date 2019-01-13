import React, {Component} from 'react'
import {connect} from 'react-redux'

class Subscriber extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let message
        console.log(this.props.inputOddMessage)
        if(this.props.index%2 ===0)
        {
            message = this.props.inputEvenMessage
        }
        if(this.props.index%2 ===1)
        {
            message = this.props.inputOddMessage
        }        
        return (
            <div>subscriber-{this.props.index} : 
            {message}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        inputOddMessage : state.broadcast.inputOddMessage,
        inputEvenMessage : state.broadcast.inputEvenMessage
    }
}

export default connect(mapStateToProps)(Subscriber)