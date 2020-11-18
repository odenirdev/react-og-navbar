import React from 'react'
import Styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCompass, FaHome } from 'react-icons/fa'
import Highlight from 'react-highlight'

import { Aside } from 'react-og-navbar'

import TSIcon from '../../images/typescript-icon.png'
import StyledIcon from '../../images/styled-component-icon.png'
import ReactIcon from '../../images/react-icon.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = Styled.div`
  animation: ${rotate} 3s linear infinite;
  width: fit-content;
`

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
        <Link to='/navbar'>
          <Aside.Icon>
            <FaCompass />
          </Aside.Icon>
          <Aside.Title>Navbar</Aside.Title>
        </Link>
        <Link to='/aside'>
          <Aside.Icon>
            <FaCompass />
          </Aside.Icon>
          <Aside.Title>Aside</Aside.Title>
        </Link>
        <Link to='/footer'>
          <Aside.Icon>
            <FaCompass />
          </Aside.Icon>
          <Aside.Title>Footer</Aside.Title>
        </Link>
        <Aside.Bottom>
          <div className='aside-icons'>
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
        </Aside.Bottom>
      </Aside>
      <Aside.Main>
        <h1>Aside</h1>
        <p>Aside navbar by OG Developer</p>

        <h2>Code</h2>
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
      </Aside.Main>
    </>
  )
}

export default Index
