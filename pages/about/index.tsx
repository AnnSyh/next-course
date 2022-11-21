import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css'
import Router from 'next/router'
import { NextPageContext } from 'next'
import MainLayout from '../../components/MainLayout'
import { AboutTitle } from '../../interfaces/title'

interface AboutPageProps {
  title: AboutTitle
}

export default function About({title}: AboutPageProps) {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About page'}>
      <h1>{title.title}</h1>
      {/* <h1>{title}</h1> */}
      {/* <h1>{process.env.API_URL}</h1> */}

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push('/posts')}>Go  to posts</button>

    </MainLayout>
  )
}

interface AboutNextPageContext extends NextPageContext {
  query:{
    title: string
  }
}

About.getInitialProps = async ({ query, req }: AboutNextPageContext) => {
  const response = await fetch(`${process.env.API_URL}/about`)
  const title: AboutTitle = await response.json()

  return {
    title: title
  }
}
