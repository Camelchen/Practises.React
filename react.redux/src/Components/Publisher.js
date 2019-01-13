import React, {Component} from 'react'
import {connect} from 'react-redux'
import broadcastMessage from '../Store/actions'
class Publisher extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:""
        }
    }

    updateInputValue(evt){
        const input = evt.target.value
        console.log(input.split('-'))
        if (input.split('-').length>1 && input.split('-')[0].length && input.split('-')[1].length>0){
            if (input.split('-')[0]%2 ===0)
            {
                // console.log('even')
                this.props.broadcastMessage(input,'even')
    
            }
            if (input.split('-')[0]%2 ===1)
            {
                // console.log('odd')
                this.props.broadcastMessage(input,'odd')
            }    
        }
    
        this.setState({
            inputValue : input
        })
    }

    render(){
        return (
            <div>here is publisher,
                <input value={this.state.inputValue} onChange={evt=>this.updateInputValue(evt)}></input>
                input message: {this.state.inputValue}
            </div>
        )
    }
}

export default connect(null,{broadcastMessage})(Publisher)