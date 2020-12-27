
const initialState = {firstLaunch: true, isDarkTheme: true,
    theme: {
        default: {
            drawerBackgroundColor: "white", backgroundColor: "rgb(250,250,250)", boxBackgroundColor: "rgb(250,250,250)",
            textColor: "black",  sectionTitleColor: "black"
        },
        dark: {
            drawerBackgroundColor: "rgb(30,30,30)", backgroundColor: "rgb(30,30,30)", boxBackgroundColor: "rgb(40,40,40)",
            textColor: "white", sectionTitleColor: "grey"
        },
    }
}

function setUserInfos(state=initialState, action){
    let nexState
    switch (action.type){
        case 'FIRST_LAUNCH':
            nexState = { ...state,firstLaunch: false}
            return nexState || state

        case 'CHANGE_THEME':
            nexState = {...state, isDarkTheme: !state.isDarkTheme}
            return nexState || state

        default:
            return state
    }
}

export default setUserInfos
