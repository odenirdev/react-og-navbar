import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from 'react-og-navbar'

import OGLogo from '../../images/og-light-logo.png'

function Index() {
  return (
    <Footer
      logo={<img src={OGLogo} width='200px' alt='OG Logo' />}
      links={
        <>
          <Link to='/'>Home</Link>
          <Link to='/navbar'>Navbar</Link>
          <Link to='/aside'>Aside</Link>
          <Link to='/footer'>Footer</Link>
        </>
      }
    >
      <p>
        OG Developer - License MIT © [odenirdev](https://github.com/odenirdev)
      </p>
    </Footer>
  )
}

export default Index
