import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Quotes extends Component {
  constructor(props) {
    super(props)
    const idxStart = 0
    this.state = {
      index: idxStart,
      next: this.getNextIndex(idxStart),
      visible: true
    }
  }

  getNextIndex(idx) {
    if (idx >= this.props.quotes.length - 1) {
      return 0
    }
    return idx + 1
  }

  getPreviousIndex(idx) {
    if (idx < 1) {
      return this.props.quotes.length - 1
    }
    return idx - 1
  }

  setNextIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx),
      visible: true
    })
  }

  setPreviousIndexes(idx) {
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
    const quote = this.props.quotes[this.state.index]
    return (
      <div className="quotes-container">
        <div className={`quote-text absCenter ${visibleQuote}`}>
          {quote.text}
          <div className="quote-author">
            - {quote.author}
          </div>
        </div>
        <div className="quote-button-container absCenter">
          <div onClick={this.handleNextQuote} className="quote-icon quote-icon-right">
            <FontAwesomeIcon icon="chevron-right" />
          </div>
          <div onClick={this.handlePreviousQuote} className="quote-icon quote-icon-left">
            <FontAwesomeIcon icon="chevron-left" />
          </div>
        </div>
        <style jsx>{`
          .quotes-container {
            position: relative;
            color: white;
            font-family: Righteous, Sans-Serif, Arial;
            letter-spacing: 1px;
            font-size: 1.5rem;
            height: 12rem;
          }
          .quote-text {
            border-left: 5px solid white;
            width: 26rem;
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
          .quote-button-container {
            width: 26rem;
          }
          .quote-icon {
            position: absolute;
            top: 50%;
            max-width: 14px;
          }
          .quote-icon-left {
            left: -5rem;
          }
          .quote-icon-right {
            right: -5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Quotes