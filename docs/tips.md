#### setState()

 * need assign a new value to a field of object in state, 
```javascript
 objA {
    "key":1, 
    "value":"A",
    "children":[
      objA1 : {
        "key":11
        "value":"A1"
      }
      objA2 : {
        "key":12
        "value":"A2"
      }
      ...
    ]
  }
 ```
 
 either use lodash cloneDeep to create a new object, assign the new value to it, then set it to state
 ```javascript
  const copyObjA = _.cloneDeep(objA)
  copyObjA.value = "newValue"
  this.setState({objA:copyObjA})
 ```
  
  or use spread operator (...)
 ```javascript
  this.setState({...objA,value:"newValue"})
 ```
