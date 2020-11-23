
const initialState = {}

function setUserInfos(state=initialState, action){
    let nexState
    switch (action.type){
        case 'CONNECT':
            nexState = action.value
            return nexState || state

        case 'DISCONNECT':
            nexState = {}
            return nexState || state

        default:
            return state
    }
}

export default setUserInfos
