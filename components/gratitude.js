import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Gratitude = props => {
  return (
    <div className="gratitude-container">
      <div htmlFor={`gratitude-` + props.index} className="gratitude-input-wrapper">
        <input className="gratitude-input" type="text" id={`gratitude-` + props.index} placeholder="&nbsp;" defaultValue={props.gratitude} />
        <span className="gratitude-label">Label</span>
        <span className="gratitude-label-text-border"></span>
        <span className="close-gratitude" onClick={() => props.handleRemoveGratitude(props.index)}>
          <FontAwesomeIcon icon="times-circle" />
        </span>
      </div>
      <style jsx>{`
        .gratitude-container {
          padding-top: 2rem;
        }
        .gratitude-input-wrapper {
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: 380px;
        }
        .gratitude-input-wrapper .gratitude-label {
          position: absolute;
          top: 16px;
          left: .5rem;
          font-size: 16px;
          color: #9098a9;
          font-weight: 500;
          transform-origin: 0 0;
          transition: all 0.2s ease;
          font-family: sans-serif;
        }
        .gratitude-input-wrapper .gratitude-label-text-border {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: #07f;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: all 0.15s ease;
        }
        .gratitude-input-wrapper .gratitude-input {
          -webkit-appearance: none;
          width: 100%;
          border: 0;
          padding: 1.2rem .5rem;
          height: 48px;
          font-size: 26px;
          font-weight: 500;
          border-bottom: 2px solid #c8ccd4;
          background: none;
          border-radius: 0;
          color: #223254;
          transition: all 0.15s ease;
        }
        .gratitude-input-wrapper .gratitude-input:hover {
          background: rgba(34,50,84,0.03);
        }
        .gratitude-input-wrapper .gratitude-input:not(:placeholder-shown) + span {
          color: #5a667f;
          transform: translateY(-26px) scale(0.75);
        }
        .gratitude-input-wrapper .gratitude-input:focus {
          background: none;
          outline: none;
        }
        .gratitude-input-wrapper .gratitude-input:focus + span {
          color: #07f;
          transform: translateY(-26px) scale(0.75);
        }
        .gratitude-input-wrapper .gratitude-input:focus + span + .gratitude-label-text-border {
          transform: scaleX(1);
        }
        .close-gratitude {
          position: absolute;
          top: 1rem;
          padding-left: 1rem;
          color: #adb5bd;
        }
        .close-gratitude:hover {
          color: #ff6b6b;
        }
      `}</style>
    </div>
  )
}

export default Gratitude