const INITIAL_STATE = {infoCarros: [], title: '', description: ''}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'FORM_SEARCHED':
            return { ...state, infoCarros: action.payload}
        case 'CHANDED_DESCRIPTION':
            return { ...state, description: action.payload}
        case 'CHANDED_TITLE':
                return { ...state, title: action.payload}
        default:
            return state
    }
}