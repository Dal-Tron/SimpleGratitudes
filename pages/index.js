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
    timestring: '',
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
    const date = new Date();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

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
    ];

    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const intDay = date.getDate();
    const year = date.getFullYear();
    const timestamp = date.toTimeString()
    const H = timestamp.substr(0, 2)
    const h = H % 12 || 12
    const ampm = (H < 12 || H === 24) ? " AM" : " PM"
    const time = h + timestamp.substr(2, 3) + ampm
    const timestring = `${weekday}, ${month} ${intDay}, ${year}, ${time}`;

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
    pdfMake.vfs = pdfFonts
    const {
      timestring,
      gratitudes,
      visions
    } = this.state

    pdfMake.fonts = {
      'Righteous': {
        normal: 'Righteous.ttf',
        bold: 'Righteous.ttf',
        italics: 'Righteous.ttf',
        bolditalics: 'Righteous.ttf',
      },
      'Snippet': {
        normal: 'Snippet.ttf',
        bold: 'Snippet.ttf',
        italics: 'Snippet.ttf',
        bolditalics: 'Snippet.ttf',
      },
      'CodyStar-Light': {
        normal: 'CodyStar-Light.ttf',
        bold: 'CodyStar-Light.ttf',
        italics: 'CodyStar-Light.ttf',
        bolditalics: 'CodyStar-Light.ttf',
      }
    };

    const content = [
      {
        text: 'Grateful',
        style: ['header', 'section1'],
      },
      {
        text: 'Vision',
        style: ['header', 'section2'],
      },
      {
        text: `${timestring}`,
        style: ['header', 'section3'],
      },
      {
        text: 'Gratitude',
        style: ['header', 'section4']
      },
      {
        text: 'Vision',
        style: ['header', 'section4'],
      }
    ]

    if (Object.keys(gratitudes).length > 0) {
      Object.keys(gratitudes).map((key, index) => {
        let gratitude = {
          text: gratitudes[key],
          style: ['section5']
        }
        // just start at index 5 as there are several headings (currently 4) inserted first
        content.splice(index + 4, 0, gratitude)
      })
    }

    if (Object.keys(visions).length > 0) {
      Object.keys(visions).map((key, index) => {
        let vision = {
          text: visions[key],
          style: ['section5']
        }
        // visions are currently at the end, so we can just push
        content.push(vision)
      })
    }

    const docDefinition = {
      info: {
        title: 'Grateful Vision',
        author: 'Grateful Vision',
        subject: 'Grateful Vision',
        keywords: 'Grateful Vision',
      },
      pageMargins: [0, 0, 0, 0],
      content,
      styles: {
        header: {
          fontSize: 22,
          alignment: 'center',
        },
        section1: {
          color: '#5190a5',
          font: 'Righteous',
          margin: [0, 20, 0, 0]
        },
        section2: {
          color: '#5190a5',
          font: 'Snippet',
        },
        section3: {
          color: '#2a2a2e',
          font: 'CodyStar-Light',
          margin: [0, 20, 0, 0]
        },
        section4: {
          color: '#5190a5',
          font: 'CodyStar-Light',
          margin: [0, 20, 0, 0]
        },
        section5: {
          color: '#2a2a2e',
          font: 'Snippet',
          margin: [20, 20, 20, 0],
          fontSize: 14,
          alignment: 'center'
        }
      }
    }

    pdfMake.createPdf(docDefinition).open()
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
        <section className="headspace">
          <div className="intention absCenter">
            <div className="grateful">Grateful</div>
            <div className="vision">Vision</div>
          </div>
        </section>
        <section className="time">
          <Clock timestring={timestring} />
        </section>
        <section className="quotes">
          <Quotes quotes={quotes} />
        </section>
        <section className="buttons">
        </section>
        <section className="gratitudes">
          {renderGratitudes}
          <div onClick={this.handleAddGratitude} className="dotted-text">+ Gratitude</div>
        </section>
        <section className="visions">
          {renderVisions}
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
      .dotted-text {
        text-align: center;
        padding: 2rem;
        font-family: CodyStarLight, Sans-Serif, Arial;
        color: white;
        font-size: 1.5rem;
      }
      .headspace {
        height: 10vh;
        background: #5190a5;
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
        background: #7eb8cb;
      }
      .gratitudes {
        background: lightblue;
      }
      .visions {
        background: lightblue;
      }
      .footer {
        background: #59bf7c;
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