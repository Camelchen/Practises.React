import React,{Component} from 'react'

class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"testing"
        }
    }

    render() {
        
        return (
            
            <div>{this.state.text}</div>
        )
    }
        
}
export default FirstComponent