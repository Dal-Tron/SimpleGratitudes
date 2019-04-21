import React, { Component } from 'react'

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

  setIndexes(idx) {
    this.setState({
      index: idx,
      next: this.getNextIndex(idx)
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: false
      })

      setTimeout(() => {
        this.setState({
          visible: true
        })
        this.setIndexes(this.getNextIndex(this.state.index))
      }, 1000)
    }, 5000)
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
            border-left: 5px solid lightgrey;
            max-width: 26rem;
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
        `}</style>
      </div>
    )
  }
}

export default Quotes