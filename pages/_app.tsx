import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';
import variables from '../styles/variables.module.scss';


export default function App({ Component, pageProps }:any) {
  return (
    <div style={{ color: variables.primaryColor }}>
      <NextNProgress
        color="#64ff00"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </div>
  )
}