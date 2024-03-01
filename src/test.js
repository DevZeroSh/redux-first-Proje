import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inc, q, mine } from './actions/actionsss';

const Test = () => {
    //4- access data from store reducer with useSelector
    const count = useSelector(state => state.Counter.counter)
    const isLog = useSelector(state => state.Auth.isLog)

    //5- Change data in reducer with dispatch
    const dispatch = useDispatch();


    return (
        <div>
            <h3>Counter: {count} </h3>

            {isLog ?<h3>You are my Freind</h3>:<h3>You are No </h3> }

            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(mine())}>-</button>
            <button onClick={() => dispatch(q())}>Reset</button>
            <button onClick={() => dispatch({type:'islogin'})}>Meake User</button>
            <button onClick={() => dispatch({type:'Notlogin'})}>Not User</button>
        </div>
    );
}
export default Test