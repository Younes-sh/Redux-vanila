import { incresTypeAction, decresTypeAction, restTypeAction } from "./action/actionType.js";
import { incresAction, decresAction, resetAction } from './action/actionCreator.js';

const decresBtn = document.querySelector('#decres');
const resetBtn = document.querySelector('#reset');
const incresBtn = document.querySelector('#incres');
const result = document.querySelector('.result');

//  Reducer
const counterReducer = ( state = 0 , action) => {
    switch (action.type) {
        case incresTypeAction : {
            return state + 1
        }

        case decresTypeAction : {
            return state - 1
        }

        case restTypeAction : {
            return state = 0
        }

        default : {
            return state
        }
    }
}

// Store
const store = Redux.createStore(counterReducer);

decresBtn.addEventListener('click' , () => {
    store.dispatch(decresAction())
})

resetBtn.addEventListener('click' , () => {
    store.dispatch(resetAction())
})

incresBtn.addEventListener('click' , () => {
    store.dispatch(incresAction())
})

const renderUI = () => {
    result.innerHTML = store.getState()
}

renderUI()

store.subscribe(renderUI);

