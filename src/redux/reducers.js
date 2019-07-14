export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_TOP_STORIES':
            return {
                ...state,
                data: action.data.data
            }
        default:
            return state;
    }
};
