import React from 'react';
import { useSelector } from 'react-redux'

function index () {
    const {test, test1, test2} = useSelector(state => state.register)
    return (
        <>
        <div>{test}</div>
        <div>{test1}</div>
        <div>{test2}</div>
        </>
    )
}

export default index; 