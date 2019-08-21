import React, {Component} from 'react'

class Stars extends Component {
    constructor(props){
        super(props)
        this.state = {
            markedStars : [],
            selectedStar : 0
        }
    }

    handleMarkStar = (e) =>{

        console.log(e.target.value)
        this.setState({
            selectedStar : e.target.value
        })

      }

      handleSelectStar=(e)=>{
        console.log(e)
        let markedStars=[];
        for(var i=1;i<=e.target.value;i++) {
          markedStars.push(i);
        }
        console.log(markedStars)
        this.setState({
            markedStars:markedStars
        })
      }

    render(){
        return(

            this.props.stars.map((star)=>{
                let starStyle = "Star"
                if(star<=this.state.selectedStar || this.state.markedStars.includes(star)){
                    starStyle = "Star-Marked"
                }

                return (
                    <button className={starStyle}
                    key={star} value={star} 
                    onClick={(e)=>this.handleMarkStar(e)} 
                    onMouseOver={this.handleSelectStar}
                    >x</button>
                )
            })
        )
    }
}

export default Stars