export default function broadcast(state=[],action){
    // console.log('reducer.action',action)
    switch(action.type){
        case 'BROADCAST_ODD_MESSAGE':
            // console.log('odd',action.payload)
            return {...state, inputOddMessage:action.payload}
        case 'BROADCAST_EVEN_MESSAGE':
            return {...state, inputEvenMessage:action.payload}
        default :
            return {}
    }
}
