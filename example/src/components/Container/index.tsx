import React from 'react'

import Main from '../Main'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const Index = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Index
