export default props => {
  let button
  if (props.preview) {
    button = <a
      id="handleDownload"
      onClick={props.handleDownload}
      className="inverted-action-button action-button absCenter"
      download={`Grateful_Vision_${props.fileTimestamp}.png`}
      href={props.url}
    >download</a>
  } else {
    button = <div
      id="handlePreview"
      onClick={props.handlePreview}
      className="inverted-action-button action-button absCenter">preview</div>
  }
  return <div className="preview-download-container">
    {button}
  </div>
}

