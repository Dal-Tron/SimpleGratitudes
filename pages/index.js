import React from 'react'
import { connect } from 'react-redux'
import { setClock } from '../store'

import Head from 'next/head';
import Clock from '../components/clock'

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH 'reduxStore.dispatch'
    reduxStore.dispatch(setClock(isServer))

    return {}
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM 'mapDispatchToProps'
    this.timer = setInterval(() => this.props.setClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="page-wrapper">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className="headspace">
          <div className="intention">Gratitude Today</div>
        </section>
        <section className="time">
          <Clock />
        </section>
        <section className="buttons" />
        <section className="gratitudes" />
        <section className="vision" />
        <style jsx global>{`
      @font-face {
        font-family: ZillaSlab;
        src: url("/static/fonts/ZillaSlab.ttf") format("truetype");
      }
      @font-face {
        font-family: CodyStarLight;
        src: url("/static/fonts/CodyStar-Light.ttf") format("truetype");
      }
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        overflow: scroll;
      }
      .headspace {
        height: 10rem;
        background: lightgrey;
        position: relative;
      }
      .intention {
        font-family: ZillaSlab, Arial;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: white;
      }
      .time {
        position: relative;
        height: 10rem;
        background: lightblue;
      }
    `}</style>
      </div>
    )
  }
}

const mapDispatchToProps = { setClock }

export default connect(
  null,
  mapDispatchToProps
)(Index)