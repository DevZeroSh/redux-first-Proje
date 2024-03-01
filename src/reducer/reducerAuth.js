

export const reducerAuth = (state = { isLog: false }, action) => {

    if (action.type === 'islogin') {
        return { isLog: true }
    }

    else if (action.type === 'Notlogin') {
        return { isLog: false }
    }
    else {
        return state;
    }
}