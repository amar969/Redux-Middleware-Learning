import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { incCount, decCount } from '../Redux/action';

export const Counter = () => {
  
    const {count} = useSelector((state) => state)
    console.log(count)
    const dispatch = useDispatch()

    return (
    <>
    <h1>Count {count} </h1>
    <button onClick={() => {dispatch(incCount(1))}} >+</button>
    <button onClick={() => {dispatch(decCount(1))}}>-</button>
    </>
  )
}