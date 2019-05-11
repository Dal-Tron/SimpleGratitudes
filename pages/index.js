import React, { Component } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from '../static/js/vfs_fonts'
import { generateUniqueID } from '../lib/helpers'

import Head from 'next/head'
import Clock from '../components/Clock'
import Text from '../components/Text'
import Quotes from '../components/Quotes';

class Index extends Component {
  state = {
    time: '',
    timestamp: '',
    quotes: [
      {
        "text": "First quote. With lost of text almost a whole book at this point.",
        "author": "First Author"
      },
      {
        "text": "Second quote.",
        "author": "Second Author"
      }
    ],
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

  handleCreatePDF = () => {
    pdfMake.vfs = pdfFonts

    pdfMake.fonts = {
      Righteous: {
        normal: 'Righteous.ttf',
        bold: 'Righteous.ttf',
        italics: 'Righteous.ttf',
        bolditalics: 'Righteous.ttf',
      }
    };

    const docDefinition = {
      info: {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
      },
      content: 'This is an sample PDF printed with pdfMake',
      defaultStyle: {
        font: 'Righteous'
      }
    }

    pdfMake.createPdf(docDefinition).open()
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
        <section className="quotes">
          <Quotes quotes={this.state.quotes} />
        </section>
        <section className="buttons">
        </section>
        <section className="gratitudes">
          {gratitudes}
          <div onClick={this.handleAddGratitude} className="dotted-text">+ Gratitude</div>
        </section>
        <section className="visions">
          {visions}
          <div onClick={this.handleAddVision} className="dotted-text">+ Vision</div>
        </section>
        <section className="footer">
          <div className="dotted-text" onClick={this.handleCreatePDF}>Download</div>
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
        margin-bottom: 6rem;
        background: lightgrey;
      }
      .absCenter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .inline {
        display: inline-block;
      }
      .dotted-text {
        text-align: center;
        padding: 2rem;
        font-family: CodyStarLight, Sans-Serif, Arial;
        color: white;
        font-size: 1.5rem;
      }
      .headspace {
        height: 10vh;
        background: lightgrey;
        position: relative;
      }
      .intention {
        font-size: 2rem;
        color: white;
        text-align: center;
      }
      .quotes {
        background: lightblue;
      }
      .grateful {
        font-family: Righteous, Sans-Serif, Arial;
      }
      .vision {
        font-family: Snippet, Sans-Serif, Arial;
      }
      .time {
        background: grey;
      }
      .gratitudes {
        background: lightblue;
      }
      .visions {
        background: lightgrey;
      }
      .footer {
        background: grey;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 6rem;
      }
    `}</style>
      </div>
    )
  }
}

export default Index