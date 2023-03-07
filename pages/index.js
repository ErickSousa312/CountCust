import Head from 'next/head'
import { useReducer, useState } from 'react'
import { set } from 'mongoose'
import Form from '@/components/Form/form'
import Category from '@/components/Category/category'

function reducer(DadosLivros, payload) {
  switch (payload.type) {
    case 'addLivro':
      console.log(payload)
      return { ...DadosLivros, livros: [...DadosLivros.livros, payload.livro] };
    case 'reset':
      return { livros: [] };
    default:
      throw new Error('Tipo de ação desconhecido.');
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

  const [DadosLivros, dispath] = useReducer(reducer, {
    livros:[]}
  )

  return (
    <div style={{padding: '50px 0px'}}>
      <Form
        categorias={Object.values(categorias).map((categoria) => categoria.nome)}
        LivroCadastrado={(livro) => dispath({ type: 'addLivro', livro })}
      />
      {Object.values(categorias).map((categoria) => (
          <Category
          key={categoria.nome}
          nome = {categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          livros={DadosLivros.livros.filter((dado)=>dado.categoria==categoria.nome)}
          />

      ))}
    </div>
  )
}

