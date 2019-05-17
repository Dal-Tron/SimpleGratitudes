export default (props) => <section className="time">
  <div className="time-wrapper">
    <div className="time-container">
      <div className="inline">{props.timestring}</div>
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
          font-family: CodyStarLight, Sans-Serif, Arial;
          text-align: center;
          color: white;
          font-size: 1.5rem;
        }
      `}</style>
</section>