import React, { Component } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from '../static/js/vfs_fonts'
import { generateUniqueID } from '../lib/helpers'
import pdfFontConfig from '../components/pdf/pdfFontConfig'
import docDefinition from '../components/pdf/docDefinition'

import Head from 'next/head'
import Brand from '../components/index/Brand'
import Clock from '../components/index/Clock'
import Quotes from '../components/index/Quotes'
import Text from '../components/shared/Text'
import Footer from '../components/shared/Footer'

class Index extends Component {
  state = {
    timestring: '',
    quotes: [
      {
        "text": "Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul.",
        "author": "Amy Collette"
      },
      {
        "text": "Joy is the simplest form of gratitude.",
        "author": "Karl Barth"
      },
      {
        "text": "In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.",
        "author": "Dietrich Bonhoeffer"
      },
      {
        "text": "Gratitude opens the door to the power, the wisdom, the creativity of the universe. You open the door through gratitude.",
        "author": "Deepak Chopra"
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
    const date = new Date();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    const weekday = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    const intDay = date.getDate()
    const year = date.getFullYear()
    const timestamp = date.toTimeString()
    const H = timestamp.substr(0, 2)
    const h = H % 12 || 12
    const ampm = (H < 12 || H === 24) ? " AM" : " PM"
    const time = h + timestamp.substr(2, 3) + ampm
    const timestring = `${weekday}, ${month} ${intDay}, ${year}, ${time}`

    this.setState({ timestring })
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
    const {
      timestring,
      gratitudes,
      visions
    } = this.state

    const fileTimestamp = timestring.replace(/[ ,]/g, "_")

    pdfMake.vfs = pdfFonts
    pdfMake.fonts = pdfFontConfig

    pdfMake.createPdf(docDefinition({
      timestring,
      gratitudes,
      visions
    })).download(`Grateful_Vision_${fileTimestamp}.pdf`)
  }

  render() {
    const {
      timestring,
      quotes,
      gratitudes,
      visions,
    } = this.state
    const renderGratitudes = Object.keys(gratitudes).map((key, index) => <Text
      key={index}
      id={key}
      text={gratitudes[key]}
      handleRemoveText={() => this.handleRemoveGratitude(key)}
      handleSaveText={this.handleSaveGratitude}
      rows="4"
      label="Gratitude"
    />)

    const renderVisions = Object.keys(visions).map((key, index) => <Text
      key={index}
      id={key}
      text={visions[key]}
      handleRemoveText={() => this.handleRemoveVision(key)}
      handleSaveText={this.handleSaveVision}
      rows="4"
      label="Vision"
    />)

    return (
      <div className="page-wrapper">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Brand />
        <Clock timestring={timestring} />
        <Quotes quotes={quotes} />
        <section className="gratitudes">
          {renderGratitudes}
          <div onClick={this.handleAddGratitude} className="section-header">+</div>
        </section>
        <section className="visions">
          {renderVisions}
          <div onClick={this.handleAddVision} className="section-header">+</div>
        </section>
        <Footer handleCreatePDF={() => this.handleCreatePDF()} />
        <style jsx global>{`
      @font-face {
        font-family: 'Arapey';
        src: url('/static/fonts/Arapey.woff') format('woff');
      }
      @font-face {
        font-family: 'Righteous';
        font-display: auto;
        src: url("/static/fonts/Righteous.woff") format("woff");
      }
      @font-face {
        font-family: 'Snippet';
        src: url("/static/fonts/Snippet.woff") format("woff");
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
        background: #b0edc5;
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
      .section-header {
        text-align: center;
        padding: 2rem;
        color: white;
        font-size: 2.5rem;
        font-family: Sans-Serif, Arial;
      }
      .gratitudes {
        background: lightblue;
      }
      .visions {
        background: lightblue;
      }
    `}</style>
      </div>
    )
  }
}

export default Index