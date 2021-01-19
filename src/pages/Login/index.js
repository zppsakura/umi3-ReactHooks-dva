import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function index () {
    const {test, test1, test2} = useSelector(state => state.register)
    const dispatch = useDispatch()
    return (
        <>
        <div onClick = {() => dispatch({type: 'register/register'})}>{test}</div>
        <div onClick = {() => dispatch({type: 'register/query'})}>{test1}</div>
        <div>{test2}</div>
        </>
    )
}

export default index; 