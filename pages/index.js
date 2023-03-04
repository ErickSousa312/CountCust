
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'

const reducer = (state, action)=>{
  switch(action.type){
    case "increment":
      return {...state, count: state.count+1 }
    case "showText":
      return {...state, showText: !state.showText }  
    default:
      return "erro no swtich"
  }
}

export default function Home() {
  
    const[state, dispatch]= useReducer(reducer, {
      count: 0,
      showText: true,
    })
  
    const handClick = ()=>{
      dispatch({type: 'increment'})
      dispatch({type: 'showText'})
    }

    const {count, showText} = state

  return (
    <>
      <div className='app'>
        <h1></h1>
        <h3>{count}</h3>
        <button onClick={handClick}>Clique</button>
        {showText && <p> Bem vindo</p>}
      </div>

    </>
  )
}

