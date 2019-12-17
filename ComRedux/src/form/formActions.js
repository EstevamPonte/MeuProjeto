import axios from 'axios'
const URL = 'http://localhost:3004/importants/'

export const serchInfo = () => {
    return ( dispatch ) => {
        axios.get(URL)
            .then(resp => dispatch({type: 'FORM_SEARCHED', payload: resp.data}))
    }
}

export const postInfo = (info) => {
    return (dispatch) => {
        axios.post(URL, info)
            .then(resp => dispatch(serchInfo()))
    } 
} 

export const handleChangeDescription = (event) => {
    return {type: 'CHANDED_DESCRIPTION', payload: event.target.value}
}

export const handleChangeTitle = (event) => {
    return {type: 'CHANDED_TITLE', payload: event.target.value}
}

export const deleteCard = (id) => {
    return (dispatch) => {
        axios.delete(URL + id)
            .then(resp => dispatch(serchInfo()))
    }
}
