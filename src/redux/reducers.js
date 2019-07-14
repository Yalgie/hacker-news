export default (state = {}, action) => {
    switch(action.type) {
        case 'REDUCER':
            return {
                ...state,
            }
        default:
            return state;
    }
};
