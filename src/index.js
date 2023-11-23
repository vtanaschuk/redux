import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

const initialState = 0;

const reducer = (state= 0, action) =>{
    if (action.type === 'INC'){
        return state + 1;
    }
    if (action.type === 'DEC'){
        return state - 1;
    }
    if (action.type === 'RND'){
        return ( state * action.payload);
    }
    return state;
}


const store = createStore(reducer)
const update = () =>{
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update)

document.getElementById('dec').addEventListener('click', ()=>{
    store.dispatch({type: 'DEC'})
})

document.getElementById('inc').addEventListener('click', ()=>{
    store.dispatch({type: 'INC'})
})

document.getElementById('rnd').addEventListener('click', ()=>{
    const value = Math.floor(Math.random() * 10);
    store.dispatch({type: 'RND', payload: value})
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <></>
  </React.StrictMode>
);
