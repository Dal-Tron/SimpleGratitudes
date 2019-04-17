import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGratitude, removeGratitude } from '../store'

import Head from 'next/head'
import Clock from '../components/clock'
import Gratitude from '../components/gratitude'

class Index extends Component {
  state = {
    time: '',
    gratitudes: [{ gratitude: "" }]
  }

  componentDidMount() {
    this.handleCreateTimeString()
    this.timer = setInterval(() => this.handleCreateTimeString(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleCreateTimeString() {
    const time = new Date(Date.now()).toTimeString()
    const H = time.substr(0, 2)
    const h = H % 12 || 12
    const ampm = (H < 12 || H === 24) ? " AM" : " PM"
    const timestring = h + time.substr(2, 3) + ampm
    this.setState({ time: timestring })
  }

  handleAddGratitude = () => {
    this.props.addGratitude({ gratitude: "" })
  }

  handleRemoveGratitude = index => {
    this.props.removeGratitude(index)
  }

  render() {
    let gratitudes = this.state.gratitudes
    if (this.props.gratitudes) {
      gratitudes = this.props.gratitudes.map((g, i) => {
        return <Gratitude
          key={i}
          index={i}
          gratitude={g.gratitude}
          handleRemoveGratitude={this.handleRemoveGratitude}
        />
      })
    }
    return (
      <div className="page-wrapper">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className="headspace">
          <div className="intention absCenter">Gratitude Today</div>
        </section>
        <section className="time">
          <Clock time={this.state.time} />
        </section>
        <section className="buttons">
        </section>
        <section className="gratitudes">
          {gratitudes}
          <div onClick={this.handleAddGratitude} className="add-gratitude">+ Gratitude</div>
        </section>
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
      .absCenter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .headspace {
        height: 10rem;
        background: lightgrey;
        position: relative;
      }
      .intention {
        font-family: ZillaSlab, Arial;
        font-size: 2rem;
        color: white;
      }
      .time {
        position: relative;
        height: 10rem;
        background: lightblue;
      }
      .gratitudes {
        position: relative;
        background: lightgrey;
      }
      .add-gratitude {
        text-align: center;
        margin: 2rem;
        font-family: CodyStarLight, Arial;
        color: white;
        font-size: 1.5rem;
      }
    `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { gratitudes } = state
  return { gratitudes }
}
const mapDispatchToProps = { addGratitude, removeGratitude }

export default connect(mapStateToProps, mapDispatchToProps)(Index)