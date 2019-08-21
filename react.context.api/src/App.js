import React, { Component } from 'react';
import {Button} from 'antd'
const ButtonGroup = Button.Group;


const LanguageContext = React.createContext({
  currentLanguage : 'EN'
})

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentLanguage:'EN'
    }
}

  handleButtonGroup= (e) =>{
    console.log(e.target)
    const langKey = e.target.toString()//.substring(6, 2);
    console.log(langKey)
    this.setState(()=>({
      currentLanguage : langKey
    })
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <ButtonGroup onClick={this.handleButtonGroup}>
          <Button>EN</Button>
          <Button>FR</Button>
        </ButtonGroup>
        <LanguageContext.Provider value={{currentLanguage:this.state.currentLanguage}}>
          <ParentComp />
        </LanguageContext.Provider>

      </div>
    );
  }
}

var ParentComp = function ParentComponent(){
  return (
    <div>
      <h3>Parent</h3>
      <ChildComp />
    </div>
  )
}

var ChildComp = function ChildComponent(){
  return (
    <div>
      <h5>Child</h5>
      <LanguageContext.Consumer>
        {
          context => (
            <p>current Language is: <span>{context.currentLanguage}</span></p>
          )
        }
        
      </LanguageContext.Consumer>
    </div>
    
  )
}




export default App;
