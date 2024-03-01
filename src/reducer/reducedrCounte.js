import { plass, min, Reset } from "../type/type";

//2- Create reducer to set state and change it
export const reducedrCounte = (state = { counter: 0, a:100 }, action) => {

    if (action.type === plass) {
        return ({ counter: state.counter + 1 });
    }

    else if (action.type === min) {
        return ({ counter: state.counter - 1 });
    }

    else if (action.type === Reset) {
        return ({ counter: 0 });
    }
    else {
        return state;
    }
}
