function broadcastMessage(message,messageType){
    console.log('action.message',message)
    console.log('action.messageType',messageType)
    switch (messageType){
        case 'odd': 
            return {
                type:'BROADCAST_ODD_MESSAGE',
                payload:message
            }
        case 'even': 
            return {
                type:'BROADCAST_EVEN_MESSAGE',
                payload:message
            }            
    }
}
export default broadcastMessage