import React from 'react';
import Head from 'next/head';

// Components
import Header from '../components/header/header';
import LoginForm from '../components/loginForm/loginForm';

// Styles
import styles from '../styles/Home.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign in | Status Hero</title>
        <link rel="icon" href="https://statushero.com/icon.svg?v=v3358" />
      </Head>

      <header>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" fill="currentColor" className="text-mood-500">
            <path
                d="M116.3 29.5c-.7-.8-2.2-1.5-3.3-1.5H31.5c-1.1 0-2.6.6-3.4 1.5l-23.6 25c-.8.8-.7 2.1.1 2.8l66.1 59.5c.8.7 2.2.7 3 0l66.1-59.5c.8-.7.9-2 .1-2.8l-23.6-25zm-7.2 7.5c1.1 0 2.6.6 3.4 1.4L127 53.9c.8.8.7 2.1-.1 2.8l-53.2 47.9c-.8.7-2.2.7-3 0L17.5 56.7c-.8-.7-.9-2-.1-2.8L32 38.5c.7-.8 2.3-1.5 3.4-1.5h73.7zM70.7 93c.8.7 2.2.7 3 0l39.7-35.2c.8-.7.9-2 .2-2.8l-3.3-3.7c-.7-.8-2-.9-2.8-.2L73.7 81c-.8.7-2.2.7-3 0L42 55.6c-.8-.7-.6-1.3.5-1.3h8.3c1.1 0 2.7.6 3.5 1.3l16.5 14.6c.8.7 2.2.7 3 0l25.6-23.7c.8-.8.6-1.4-.5-1.4h-9.3c-1.1 0-2.7.6-3.5 1.4L73.6 57.9c-.8.8-2.1.8-3 0L57.7 46.5c-.8-.7-2.4-1.3-3.5-1.3H38.7c-1.1 0-2.6.6-3.4 1.5l-6.4 6.7c-.8.8-.7 2 .1 2.8L70.7 93z"></path>
          </svg>
        </a>
      </header>

      <main>
          <Header><h1>Welcome back!</h1></Header>
          <LoginForm />
      </main>

      <footer className="flex justify-center py-6 text-sm text-gray-400 dark:text-gray-500">
        © 2023 Status Hero, Inc.
      </footer>

      <style jsx>{`
        main {
          padding: 24px;
          max-width: 32rem;
          color: #fff;
          background-color: rgb(30, 41, 59);
          border-radius: 8px;
          width: 512px;
        }
        h1 {
          padding: 0;
        }
        header {
          padding-bottom: 1.5rem;
        }
        header a {
          display: block;
          width: 4rem;
          color: rgb(83, 82, 237);
        }
        footer {
          width: 100%;
          height: 100px;
          color: rgb(100 116 139);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Login;
