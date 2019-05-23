export default (props) => <section className="time">
  <div className="time-wrapper">
    <div style={{
      textAlign: 'center',
      fontSize: '14px'
    }} className="time-container">
      <div style={{
        display: 'inline-block'
      }}>{props.timestring}</div>
    </div>
  </div>
  <style jsx>{`
        .time {
          background: #7eb8cb;
        }
        .time-wrapper {
          position: relative;
        }
        .time-container {
          font-family: 'Snippet', Sans-Serif;
          font-weight: 300;
          color: white;
        }
      `}</style>
</section>