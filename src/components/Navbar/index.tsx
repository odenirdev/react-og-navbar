import React, { useState } from 'react'
import { Container, Grid } from './styles'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

interface Props {
  logo: JSX.Element
  children: JSX.Element | JSX.Element[]
  infos?: JSX.Element
}

const Index = ({ logo, children, infos }: Props) => {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Grid className='react-og-header'>
        <div className='react-og-logo'>{logo}</div>
        <div className='react-og-resposive-icon' onClick={() => setShow(!show)}>
          {show ? <FaCaretUp size={42} /> : <FaCaretDown size={42} />}
        </div>
      </Grid>
      <Grid className='react-og-links' show={show}>
        {children}
      </Grid>
      <Grid className='react-og-infos' show={show}>
        {infos}
      </Grid>
    </Container>
  )
}

export default Index
