import Router from 'next/router';
import nProgress from 'nprogress';
import '../styles/globals.scss';
import '../styles/nprogress.css';
import variables from '../styles/variables.module.scss';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }:any) {
  return (
    <div style={{ color: variables.primaryColor }}>
      <Component {...pageProps} />
    </div>
  )
}