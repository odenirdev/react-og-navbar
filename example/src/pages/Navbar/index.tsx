import React from 'react'
import Highlight from 'react-highlight'

import Container from '../../components/Container'

const Index = () => {
  return (
    <Container>
      <h1>Navbar</h1>
      <p>Header navbar by OG Developer</p>

      <h2>Code</h2>
      <Highlight>{`
        import React from 'react'
        import Navbar from 'react-og-navbar'
        import { Link } from 'react-router-dom'

        function Index() {
          return (
            <Navbar
              logo={
                <Link to='/'>
                  <img src={OGLogo} width='200px' alt='OG Logo' />
                </Link>
              }
              infos={
                <div className='icones'>
                  <a
                    href='https://styled-components.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={StyledIcon} alt='Styled components icon' width='32px' />
                  </a>
                  <a
                    href='https://www.typescriptlang.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={TSIcon} alt='Typescript icon' width='32px' />
                  </a>
                  <a
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Rotate>
                      <img src={ReactIcon} alt='Typescript icon' width='32px' />
                    </Rotate>
                  </a>
                </div>
              }
            >
              <Link to='/navbar'>Navbar</Link>
              <Link to='/aside'>Aside</Link>
              <Link to='/footer'>Footer</Link>
            </Navbar>
          )
        }

        export default Index
      `}</Highlight>
    </Container>
  )
}

export default Index
