import {ADD_USER} from '../action/type'

let intialState = {
    user: "pinku"
}

function user(state = intialState,action) {
    
    switch(action.type) {
        
        case ADD_USER : 
            return state;
        default : 
            return state

    }



}


export default user;