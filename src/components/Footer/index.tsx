import React from 'react'

import { Container, Grid } from './styles'

interface Props {
  children: JSX.Element | JSX.Element[]
  logo: JSX.Element
  links: JSX.Element
}

function Index({ children, logo, links }: Props) {
  return (
    <Container>
      <Grid className='react-og-footer-links'>{links}</Grid>
      <Grid>{children}</Grid>
      <Grid className='react-og-footer-logo'>{logo}</Grid>
    </Container>
  )
}

export default Index
