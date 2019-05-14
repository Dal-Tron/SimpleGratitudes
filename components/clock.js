const Clock = props => {
  return (
    <div className="time-wrapper">
      <div className="time-container">
        <div className="inline time">{props.timestring}</div>
      </div>
      <style jsx>{`
        .time-wrapper {
          position: relative;
          height: 3vh;
        }
        .time-container {
          font-family: CodyStarLight, Sans-Serif, Arial;
          text-align: center;
          color: white;
          font-size: 1.5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

export default Clock