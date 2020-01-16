export default props => (
  <section className="time">
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
        padding: 5px;
      }
      .time-container {
        font-family: "Snippet", Sans-Serif;
        font-weight: 300;
        text-align: center;
        color: white;
        font-size: 1.2rem;
      }
    `}</style>
  </section>
);
