// import {createStore} from 'redux'
// function reducer(state={value:0}, action) {
//     switch (action.type) {
//         case "Increment":
//             return {...state, value:state.value+1}
//         case "Decrement":
//             return {...state, value:state.value-1}
//         case "Fetching":
//             return {...state, title:action.title}
//         default:
//             return state
//     }
// }

// const store = createStore(reducer)

// function incrementAction() {
//     return {
//         type:"Increment"
//     }
// }

// function decrementAction() {
//     return {
//         type:"Decrement"
//     }
// }

// async function fetchAction() {
//     const response = await fetch('https://dummyjson.com/products/1')
//     const data = await response.json()
//     return {type: "Fetching",title:data.title}
// }

// function countSelector(state) {
//     return state.value
// }

// function subscribe() {
//     return store.subscribe(()=>console.log(store.getState()))
// }

// export {store, incrementAction, decrementAction, countSelector, subscribe, fetchAction}
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import postReducer from './postSlice'
const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer
    }
})

export default store