import * as api from '../API/index';


export const login = (authData) => async (dispatch) => {
    try {
        const {data} = await api.login(authData);
        dispatch({type:"AUTH", data})
    } catch(error) {
        alert(error)
    }
}