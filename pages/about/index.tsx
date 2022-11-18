import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

export default function About() {

  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About page'}>
      <h1>About page</h1>

      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push('/posts')}>Go  to posts</button>

    </MainLayout>
  )
}
