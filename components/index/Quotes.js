import React, { Component } from 'react'

class DesktopQuotes extends Component {
  constructor(props) {
    super(props)
    this.quotes = [
      {
        'text': "Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul.",
        'author': 'Amy Collette'
      },
      {
        'text': 'Joy is the simplest form of gratitude.',
        'author': 'Karl Barth'
      },
      {
        'text': 'In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.',
        'author': 'Dietrich Bonhoeffer'
      },
      {
        'text': 'Gratitude opens the door to the power, the wisdom, the creativity of the universe. You open the door through gratitude.',
        'author': 'Deepak Chopra'
      }
    ]
    this.state = {
      index: 0,
      next: 0,
      visible: false,
    }
  }

  componentDidMount() {
    this.setState({
      index: this.setRandomIndex(this.quotes),
      visible: true
    }, this.setInitialNextIndex())
  }

  setRandomIndex = items => {
    if (items && items.constructor === Array) {
      return Math.round(Math.random() * (items.length - 1))
    }
  }

  setInitialNextIndex = () => {
    let next = this.state.index + 1
    if (next > this.quotes.length - 1) {
      next = 0
    }
    this.setState({
      next
    })
  }

  getNextIndex = idx => {
    if (idx >= this.quotes.length - 1) {
      return 0
    }
    return idx + 1
  }

  getPreviousIndex = idx => {
    if (idx < 1) {
      return this.quotes.length - 1
    }
    return idx - 1
  }

  setNextIndexes = idx => {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx),
      visible: true
    })
  }

  setPreviousIndexes = idx => {
    this.setState({
      index: idx,
      next: this.getPreviousIndex(idx),
      visible: true
    })
  }

  handleNextQuote = () => {
    this.setState({
      visible: false
    })
    setTimeout(() => {
      this.setNextIndexes(this.getNextIndex(this.state.index))
    }, 1000)
  }

  handlePreviousQuote = () => {
    this.setState({
      visible: false
    })
    setTimeout(() => {
      this.setPreviousIndexes(this.getPreviousIndex(this.state.index))
    }, 1000)
  }

  render() {
    const visibleQuote = this.state.visible ? 'visible-quote' : '';
    const quote = this.quotes[this.state.index]
    return (
      <section title="domtoimage-ignore" className="quotes">
        <div className="quotes-wrapper quote-width absCenter">
          <div onClick={this.handlePreviousQuote} className="quote-icon quote-icon-left">
            &lt;
          </div>
          <div className="quotes-container quote-width absCenter">
            <div className={`quote-text ${visibleQuote}`}>
              {quote.text}
              <div className="quote-author">
                - {quote.author}
              </div>
            </div>
          </div>
          <div onClick={this.handleNextQuote} className="quote-icon quote-icon-right">
            &gt;
          </div>
        </div>
        <style jsx>{`
          .quote-width {
            width: 22rem;
          }
          .quotes {
            background: lightblue;
            height: 13rem;
            position: relative;
          }
          .quotes-container {
            color: white;
            font-family: Righteous, Sans-Serif, Arial;
            letter-spacing: 1px;
            font-size: 1.2rem;
          }
          .quote-text {
            border-left: 5px solid white;
            padding-left: 1rem;
            opacity: 0;
            transition: all .5s ease;
          }
          .quote-author {
            text-align: right;
            max-width: 26rem;
            font-family: Snippet, Sans-Serif, Arial;
          }
          .visible-quote {
            opacity: 1;
            transition: all .5s ease;
          }
          .quote-icon {
            color: white;
            position: absolute;
            font-size: 1.5rem;
            top: -1rem;
          }
          .quote-icon-left {
            left: -5rem;
          }
          .quote-icon-right {
            right: -5rem;
          }
          @media only screen and (max-device-width: 600px) {
            .quotes-container {
              font-size: 1rem;
            }
            .quote-width {
              width: 14rem;
            }
          }
          @media only screen and (max-device-width: 400px) {
            .quotes-container {
              font-size: .9rem;
            }
            .quote-width {
              width: 12rem;
            }
            .quote-icon-left {
              left: -3rem;
            }
            .quote-icon-right {
              right: -3rem;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default DesktopQuotes