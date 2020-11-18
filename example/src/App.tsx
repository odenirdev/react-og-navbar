import React from 'react'
import WebFont from 'webfontloader'
import GlobalStyle from './global'

import Routes from './routes'

import 'highlight.js/styles/dracula.css'
import 'react-og-navbar/dist/index.css'

WebFont.load({
  google: {
    families: ['Roboto:400,500,700', 'Nunito:300,400,700']
  }
})

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
