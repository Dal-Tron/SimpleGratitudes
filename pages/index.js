import React, { Component } from 'react'
import domtoimage from 'dom-to-image'
import { generateUniqueID } from '../lib/helpers'

import Head from 'next/head'
import Brand from '../components/index/Brand'
import Clock from '../components/index/Clock'
import Quotes from '../components/index/Quotes'
import Text from '../components/shared/Text'
import AddTextIcon from '../components/index/AddTextIcon'
import Footer from '../components/shared/Footer'

class Index extends Component {
  state = {
    timestring: '',
    gratitudes: {
      'gratitude-0': ''
    },
    showVisions: false,
    visions: {
      'vision-0': ''
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
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const weekday = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    const intDay = date.getDate()
    const year = date.getFullYear()
    const timestamp = date.toTimeString()
    const H = timestamp.substr(0, 2)
    const h = H % 12 || 12
    const ampm = (H < 12 || H === 24) ? ' AM' : ' PM'
    const time = h + timestamp.substr(2, 3) + ampm
    const timestring = `${weekday}, ${month} ${intDay}, ${year}, ${time}`

    this.setState({ timestring })
  }

  handleAddGratitude = () => {
    const gratitudeID = `gratitude-${generateUniqueID()}`
    let gratitude = {}
    gratitude[gratitudeID] = ''
    const gratitudes = Object.assign({}, this.state.gratitudes, gratitude)
    this.setState({
      gratitudes
    })
  }

  handleAddVision = () => {
    const visionID = `vision-${generateUniqueID()}`
    let vision = {}
    vision[visionID] = ''
    const visions = Object.assign({}, this.state.visions, vision)
    this.setState({
      visions
    })
  }

  handleRemoveGratitude = key => {
    if (key !== 'gratitude-0') {
      const { gratitudes } = this.state
      delete gratitudes[key]
      this.setState({
        gratitudes
      })
    }
  }

  handleRemoveVision = key => {
    if (key !== 'vision-0') {
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

  showVisions = () => {
    const body = document.getElementsByTagName('body')[0]
    setTimeout(() => {
      window.scrollBy(0, body.clientHeight)
    }, 0)
    this.setState({
      showVisions: true
    })
  }

  handleCreateImage = () => {
    const filter = node => {
      return (node.title !== 'domtoimage-ignore')
    }
    domtoimage.toPng(document.body, {
      filter,
    })
      .then(dataUrl => {
        this.handleDownloadImage(dataUrl)
      })
      .catch(err => {
        alert('Sorry, there was an error with your file.')
      })
  }

  handleDownloadImage = dataUrl => {
    const {
      timestring,
    } = this.state

    const fileTimestamp = timestring.replace(/[ ,]/g, '_')
    const link = document.createElement('a')
    link.download = `Grateful_Vision_${fileTimestamp}.png`
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  render() {
    const {
      timestring,
      gratitudes,
      visions,
      showVisions
    } = this.state

    const renderGratitudes = Object.keys(gratitudes).map((key, index) => <Text
      key={index}
      id={key}
      text={gratitudes[key]}
      handleRemoveText={() => this.handleRemoveGratitude(key)}
      handleSaveText={this.handleSaveGratitude}
      label='Gratitude'
    />)

    const renderVisions = Object.keys(visions).map((key, index) => <Text
      key={index}
      id={key}
      text={visions[key]}
      handleRemoveText={() => this.handleRemoveVision(key)}
      handleSaveText={this.handleSaveVision}
      label='Vision'
    />)

    return (
      <div id='index' className='page-wrapper'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Brand />
        <Clock timestring={timestring} />
        <Quotes />
        <section className='gratitudes'>
          {renderGratitudes}
          <AddTextIcon handleAdd={this.handleAddGratitude} />
        </section>
        <div title="domtoimage-ignore" className={showVisions ? 'add-vision hide' : 'add-vision'}>
          <div className='action-button absCenter' onClick={this.showVisions}>add vision</div>
        </div>
        <div className={showVisions ? 'visions' : 'visions hide'}>
          {renderVisions}
          <AddTextIcon handleAdd={this.handleAddVision} />
        </div>
        <Footer handleCreate={() => this.handleCreateImage()} />
        <style jsx global>{`
      @font-face {
        font-family: 'Righteous';
        font-display: auto;
        src: url('/static/fonts/Righteous.woff') format('woff');
      }
      @font-face {
        font-family: 'Snippet';
        src: url('/static/fonts/Snippet.woff') format('woff');
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
        background: lightblue;
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
      .hide {
        display: none;
      }
      .gratitudes {
        background: lightblue;
      }
      .visions {
        background: lightblue;
      }
      .add-vision {
        position: relative;
        height: 8rem;
      }
      .action-button {
        font-family: Righteous, Sans-serif, Arial;
        color: white;
        font-size: 1.2rem;
        border: 2px solid white;
        padding: .5rem 1rem;
        border-radius: 2rem;
      }
    `}</style>
      </div >
    )
  }
}

export default Index