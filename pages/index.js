import React, { Component } from 'react'
import { generateUniqueID } from '../lib/helpers'

import Head from 'next/head'
import Clock from '../components/Clock'
import Text from '../components/Text'

class Index extends Component {
  state = {
    time: '',
    timestamp: '',
    gratitudes: {
      "gratitude-0": ""
    },
    visions: {
      "vision-0": ""
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
    const timestamp = new Date(Date.now()).toTimeString()
    const H = timestamp.substr(0, 2)
    const h = H % 12 || 12
    const ampm = (H < 12 || H === 24) ? " AM" : " PM"
    const time = h + timestamp.substr(2, 3) + ampm
    this.setState({
      time,
      timestamp
    })
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

  handleAddVision = () => {
    const visionID = `vision-${generateUniqueID()}`
    let vision = {}
    vision[visionID] = ""
    const visions = Object.assign({}, this.state.visions, vision)
    this.setState({
      visions
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

  handleRemoveVision = key => {
    if (key !== "vision-0") {
      const { visions } = this.state
      delete visions[key]
      this.setState({
        visions
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

  handleSaveVision = e => {
    const { visions } = this.state
    const id = e.target.id
    const visionText = e.target.value
    visions[id] = visionText
    this.setState({
      visions
    })
  }

  render() {
    const gratitudes = Object.keys(this.state.gratitudes).map((key, index) => <Text
      key={index}
      id={key}
      text={this.state.gratitudes[key]}
      handleRemoveText={() => this.handleRemoveGratitude(key)}
      handleSaveText={this.handleSaveGratitude}
      rows="3"
      label="Gratitude"
    />
    )
    const visions = Object.keys(this.state.visions).map((key, index) => <Text
      key={index}
      id={key}
      text={this.state.visions[key]}
      handleRemoveText={() => this.handleRemoveVision(key)}
      handleSaveText={this.handleSaveVision}
      rows="3"
      label="Vision"
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
          <div onClick={this.handleAddGratitude} className="add-text">+ Gratitude</div>
        </section>
        <section className="visions">
          {visions}
          <div onClick={this.handleAddVision} className="add-text">+ Vision</div>
        </section>
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
        width: 50%;
        float: left;
      }
      .visions {
        position: relative;
        background: lightgrey;
        width: 50%;
        display: inline-block;
      }
      .add-text {
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