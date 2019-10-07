import {
    addUser
} from "../actions";

const initialState = {
    modalLogin: false,
    islogin: false,
    testStatea: 0,
    testStateb: 0,
    contentlist: []
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: nextTodo++, title: action.text, completed: false }
            ];

        default:
            return state;
    }
};