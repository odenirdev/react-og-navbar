import React from 'react'
import Styled, { keyframes } from 'styled-components'
import Navbar from 'react-og-navbar'
import { Link } from 'react-router-dom'

import OGLogo from '../../images/og-light-logo.png'
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
