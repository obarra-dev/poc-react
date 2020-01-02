import { SET_CITY } from "../actions";

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.payload;
            // TODO xq el codigo de arriba solucion al error de setear en el store correctamente
           // return { ...state, city: action.payload};
        default:
            return state;
    }
}