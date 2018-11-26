// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import { createStore, combineReducers } from 'redux';

const mathState = {
    result: 1,
    lastValues: []
};

const mathReducer = (state = mathState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "MULTIPLY":
            state = {
                ...state,
                result: state.result * action.payload,
                lastValues: [...state.lastValues, action.payload]

            }
            break;
        case "DIVIDE":
            state = {
                ...state,
                result: state.result / action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "REMAINDER":
            state = {
                ...state,
                result: state.result % action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        default:
            break;
    }
    return state;
}

const userState = {
    firstName : "Mohit",
    lastName : "Sharma",
    age : 23
};

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            state = {
                ...state,
                firstName: action.payload
            }
            break;
        case "CHANGE_LAST_NAME":
            state = {
                ...state,
                lastName: action.payload
            }
            break;
        case "CHANGE_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(combineReducers({mathReducer:mathReducer, userReducer:userReducer}));

store.subscribe(() => {
    console.log("Store Updated!!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});


store.dispatch({
    type: "SUBTRACT",
    payload: 7
});

store.dispatch({
    type: "CHANGE_FIRST_NAME",
    payload: "ROHIT"
})

store.dispatch({
    type: "CHANGE_LAST_NAME",
    payload: "SAXENA"
})

serviceWorker.unregister();
