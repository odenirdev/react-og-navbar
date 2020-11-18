import React from 'react'
import Highlight from 'react-highlight'

import Container from '../../components/Container'

const Index = () => {
  return (
    <Container>
      <header>
        <h1>React OG Navbar</h1>
        <p>Navbar lib by OG Developer</p>
      </header>
      <section>
        <h2>Install</h2>
        <Highlight>{`npm install --save react-og-navbar`}</Highlight>
        or
        <Highlight>{`yarn add react-og-navbar`}</Highlight>
      </section>
      <section>
        <h2>Setup</h2>
        <Highlight>{`
          :root {
            --bg-color: #e6e6e6;
            --primary-color: #191919;
            --secundary-color: #fafafa;
            --title-font: Roboto;
          }
        `}</Highlight>
      </section>
      <section>
        <header>
          <h2>Navbar</h2>
          <p>Header navbar by OG Developer</p>
        </header>
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
      </section>
      <section>
        <header>
          <h2>Aside</h2>
          <p>Aside navbar by OG Developer</p>

          <Highlight>{`
          import React from 'react'
          import { Link } from 'react-router-dom'

          import { Aside } from 'react-og-navbar'

          const Index = () => {
            return (
              <>
                <Aside>
                  <Link to='/'>
                    <Aside.Icon>
                      <FaHome />
                    </Aside.Icon>
                    <Aside.Title>Home</Aside.Title>
                  </Link>

                  <Aside.Bottom>
                    <div className='aside-icons'>
                      <a
                        href='https://reactjs.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img src={ReactIcon} alt='Typescript icon' width='32px' />
                      </a>
                    </div>
                  </Aside.Bottom>
                </Aside>
                <Aside.Main>
                  <h1>Aside</h1>
                </Aside.Main>
              </>
            )
          }

          export default Index
        `}</Highlight>
        </header>
      </section>
      <section>
        <header>
          <h2>Footer</h2>
          <p>Footer navbar by OG Developer</p>
        </header>

        <Highlight>{`
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
          `}</Highlight>
      </section>
    </Container>
  )
}

export default Index
