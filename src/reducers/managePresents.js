export function managePresents(state = {numberOfPresents: 0}, action){
    switch(action.type) {
        case "INCREASE":
            return {numberOfPresents: 1 + state.numberOfPresents};
        default:
            return state;
    }
}
