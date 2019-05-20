export default (props) => <section className='footer'>
  <div
    title="domtoimage-ignore"
    id='add-vision'
    className='action-button absCenter download-button'
    onClick={props.handleCreate}
  >download</div>
  <style jsx>{`
    .footer {
      position: fixed;
      bottom: 4rem;
      width: 100%;
      z-index: 2;
    }
    .download-button {
      background: white;
      color: lightblue;
    }
  `}</style>
</section>
