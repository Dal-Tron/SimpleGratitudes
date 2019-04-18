import React, { Component } from 'react'
import { generateUniqueID } from '../lib/helpers'

import Head from 'next/head'
import Clock from '../components/clock'
import Gratitude from '../components/gratitude'

class Index extends Component {
  state = {
    time: '',
    gratitudes: {
      "gratitude-0": ""
    }
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
    const gratitudeID = `gratitude-${generateUniqueID()}`
    let gratitude = {}
    gratitude[gratitudeID] = ""
    const gratitudes = Object.assign({}, this.state.gratitudes, gratitude)
    this.setState({
      gratitudes
    })
  }

  handleRemoveGratitude = key => {
    if (key !== "gratitude-0") {
      const { gratitudes } = this.state
      delete gratitudes[key]
      this.setState({
        gratitudes
      })
    }
  }

  handleSaveGratitude = e => {
    const { gratitudes } = this.state
    const id = e.target.id
    const gratitudeText = e.target.value
    gratitudes[id] = gratitudeText
    this.setState({
      gratitudes
    })
  }

  render() {
    const gratitudes = Object.keys(this.state.gratitudes).map((key, index) => <Gratitude
      key={index}
      id={key}
      gratitude={this.state.gratitudes[key]}
      handleRemoveGratitude={() => this.handleRemoveGratitude(key)}
      handleSaveGratitude={this.handleSaveGratitude}
    />
    )
    return (
      <div className="page-wrapper">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className="headspace">
          <div className="intention absCenter">
            <div className="grateful">Grateful</div>
            <div className="vision">Vision</div>
          </div>
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
      @font-face {
        font-family: Righteous;
        src: url("/static/fonts/Righteous.ttf") format("truetype");
      }
      @font-face {
        font-family: Snippet;
        src: url("/static/fonts/Snippet.ttf") format("truetype");
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
        text-align: center;
      }
      .grateful {
        font-family: Righteous, Sans-Serif, Arial;
      }
      .vision {
        font-family: Snippet, Sans-Serif, Arial;
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

export default Index