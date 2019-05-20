import App, { Container } from 'next/app'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle, faLeaf, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTimesCircle, faLeaf, faPlus)

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
