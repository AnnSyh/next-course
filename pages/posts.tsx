import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ Posts.module.css'
import MainLayout from '../components/MainLayout'
import Link from 'next/link'


export default function Posts({posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts )

  useEffect(() => {
    async function load() {
  const response = await fetch('http://localhost:4200/posts')
  const json = await response.json()
      setPosts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLayout>
      <p>Loading .....</p>
    </MainLayout>
  }


  return (<MainLayout>
    <Head>
      <title>Posts Pages | Next Course</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet='utf-8' />
    </Head>
    <h1> Posts page</h1>
    {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              {post.title}
          </Link>
        </li>

      ))}
    </ul>
  </MainLayout>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return { posts: null }
  }

  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()

  return {
    posts: posts
  }

}
