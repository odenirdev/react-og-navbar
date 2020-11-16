import React from 'react'
import { Container, Title, Icon, Bottom } from './styles'

class Index extends React.Component {
  static Bottom = Bottom

  static Icon = Icon

  static Title = Title

  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Index
