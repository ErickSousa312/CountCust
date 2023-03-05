

import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'


function reducer(categoria, action) {
  switch (action.type) {
    case 'change':
      return { value: action.payload };
    case 'reset':
      return { value: '' };
    default:
      throw new Error();
  }
}

export default function Home() {
  
  const [categorias, dispatch] = useReducer(reducer, {
    Programação: {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    FrontEnd: {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    DataScience: {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    Devops: {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    UXeDesign: {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    Mobile: {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    InovacaoeGestao: {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  });
  
    const handClick = ()=>{
      dispatch({type: 'increment'})
      dispatch({type: 'showText'})
    }

    const {} = categorias

  return (
   <Form
      categorias={Object.values(categorias).map((categoria) => categoria.nome)}
   />
  )
}

