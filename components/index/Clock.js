import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.wrapper = null;
    this.setWrapperRef = e => {
      this.wrapper = e
    }
  }
  componentDidMount() {
    this.wrapper.setAttribute('style', 'background: #7eb8cb')
  }
  render() {
    return (
      <div ref={this.setWrapperRef}>
        <div style={{
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Snippet, sans-serif",
          color: "white",
        }}>
          <div>{this.props.timestring}</div>
        </div>
      </div>
    )
  }
}

export default Clock