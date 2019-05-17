export default (props) => <section className="footer">
  <div className="footer-text" onClick={props.handleCreatePDF}>Download</div>
  <style jsx>{`
    .footer {
      background: #59bf7c;
      position: fixed;
      bottom: 0;
      height: 6rem;
      width: 100%;
    }
    .footer-text {
      text-align: center;
      padding: 2rem;
      font-family: Snippet, Sans-Serif, Arial;
      color: white;
      font-size: 1.5rem;
    }
  `}</style>
</section>
