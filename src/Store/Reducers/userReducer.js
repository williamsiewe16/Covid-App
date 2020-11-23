
const initialState = {firstLaunch: true, theme: {}}

function setUserInfos(state=initialState, action){
    let nexState
    switch (action.type){
        case 'FIRST_LAUNCH':
            nexState = {firstLaunch: false}
            return nexState || state

        case 'CHANGE_THEME':
            nexState = {firstLaunch: false}
            return nexState || state

        default:
            return {firstLaunch: true, theme: {}}
    }
}

export default setUserInfos
