export default props => (
  <section className="footer">
    <div
      title="domtoimage-ignore"
      className="action-button absCenter download-button"
      onClick={props.handleCreate}
    >
      download
    </div>
    <style jsx>{`
      .footer {
        position: fixed;
        bottom: 4rem;
        width: 100%;
        z-index: 2;
        cursor: pointer;
      }
      .download-button {
        background: white;
        color: #5190a5;
      }
    `}</style>
  </section>
);
