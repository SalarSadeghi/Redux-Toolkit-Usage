// import {incrementAction, decrementAction, store, countSelector, subscribe, fetchAction} from "./store";
// import {connect} from 'react-redux'

// const Counter = (props) => {
    

//     let value = props.value

//     const add = () => {
//         props.incrementAction()
//         store.subscribe(()=>console.log(store.getState()))
//     }

//     const min = () => {
//         props.decrementAction()
//         store.subscribe(()=>console.log(store.getState()))
//     }
//     return ( 
//         <div>
//             <h1>Count is: {value}</h1>
//             <button onClick={add}>Increse</button> 
//             <button onClick={min}>Decrese</button>
//         </div>
//      );
// }

// const mapStateToProps = (state) => {
//     return {value: state.value}
// }

// const mapDispatchToProps =  {
//     incrementAction,
//     decrementAction
// }
 
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

import React from 'react'
import {incrementAction,decrementAction} from './counterSlice'
import {useSelector, useDispatch} from 'react-redux'
export default function Counter() {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch() 
  return (
    <div>
      <h1>Counter is: {value}</h1>
      <button onClick={()=>dispatch(incrementAction())}>+</button>
      <button onClick={()=>dispatch(decrementAction())}>-</button>
    </div>
  )
}
