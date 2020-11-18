# react-og-navbar

> Navbar lib by OG Developer

[![NPM](https://img.shields.io/npm/v/react-og-navbar.svg)](https://www.npmjs.com/package/react-og-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-og-navbar

or

yarn add react-og-navbar
```

## Setup

```css
:root {
  --bg-color: #e6e6e6;
  --primary-color: #191919;
  --secundary-color: #fafafa;
  --title-font: Roboto;
}
```

## Navbar

```JSX
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
```

## Aside

```JSX
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
```

## Footer

```JSX
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
```

## License

MIT © [odenirdev](https://github.com/odenirdev)
