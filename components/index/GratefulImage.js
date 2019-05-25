import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => <div className={props.previewVisible ? 'grateful-image' : 'hide'}>
  <div
    className='close-preview-icon-container'
    onClick={props.closePreview}
  >
    <FontAwesomeIcon icon='times-circle' />
  </div>
  <img src={props.imageURL} />
  <style jsx>{`
      .close-preview-icon-container {
        position: absolute;
        color: white;
        font-size: 2rem;
        right: 0;
        padding: 1rem;
      }
      .close-preview-icon-container:hover {
        color: #ff6b6b;
      }
    `}</style>
</div>