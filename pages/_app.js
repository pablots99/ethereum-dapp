import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../components/theme';
import createEmotionCache from '../components/createEmotionCache';
import '../styles/layout.css'
import Router from 'next/router';
import { Backdrop, CircularProgress } from '@mui/material';


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
 const [open, setOpen] = React.useState(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  Router.onRouteChangeStart = url => {
	setOpen(true);
  }
  Router.onRouteChangeComplete = () => {
	setOpen(false);
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
	  <Backdrop  open={open}>
  			<CircularProgress color="secondary" />
	  </Backdrop>
    </CacheProvider>

  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
