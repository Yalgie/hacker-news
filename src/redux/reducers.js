export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_TOP_STORIES':
            return {
                ...state,
                stories: action.stories
            }
        default:
            return state;
    }
};
