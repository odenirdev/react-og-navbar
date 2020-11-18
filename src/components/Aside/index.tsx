import React from 'react'
import { Container, Title, Icon, Bottom, Main } from './styles'

class Index extends React.Component {
  static Bottom = Bottom

  static Icon = Icon

  static Title = Title

  static Main = Main

  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Index
