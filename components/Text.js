import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Text = props => {
  return (
    <div className="text-wrapper">
      <div className="text-container">
        <div htmlFor={`text-` + props.id} className="text-input-wrapper">
          <textarea
            className="text-input grateful"
            id={props.id}
            placeholder="&nbsp;"
            value={props.text}
            onChange={props.handleSaveText}
            rows={props.rows}
          />
          <span className="text-label">{props.label}</span>
          <span className="text-label-text-border"></span>
          <span className="close-text" onClick={props.handleRemoveText}>
            {props.id === 'gratitude-0' || props.id === 'vision-0' ? null : <FontAwesomeIcon icon="times-circle" />}
          </span>
        </div>
      </div>
      <style jsx>{`
        .text-wrapper {
          position: relative;
          height: 16rem;
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
          padding: 2rem;
        }
        .text-container {
          padding-top: 2rem;
          height: 15vh;
        }
        .text-input-wrapper {
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: 380px;
        }
        .text-input-wrapper .text-label {
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
        .text-input-wrapper .text-label-text-border {
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
        .text-input-wrapper .text-input {
          resize: vertical;
          -webkit-appearance: none;
          width: 100%;
          border: 0;
          padding: 1.2rem .5rem 1.2rem .5rem;
          font-size: 26px;
          font-weight: 500;
          border-bottom: 2px solid #c8ccd4;
          background: none;
          border-radius: 0;
          color: #223254;
          transition: all 0.15s ease;
        }
        .text-input-wrapper .text-input:hover {
          background: rgba(34,50,84,0.03);
        }
        .text-input-wrapper .text-input:not(:placeholder-shown) + span {
          color: #5a667f;
          transform: translateY(-26px) scale(0.75);
        }
        .text-input-wrapper .text-input:focus {
          background: none;
          outline: none;
        }
        .text-input-wrapper .text-input:focus + span {
          color: #07f;
          transform: translateY(-26px) scale(0.75);
        }
        .text-input-wrapper .text-input:focus + span + .text-label-text-border {
          transform: scaleX(1);
        }
        .close-text {
          position: absolute;
          top: -1rem;
          right: .5rem;
          color: #adb5bd;
        }
        .close-text:hover {
          color: #ff6b6b;
        }
      `}</style>
    </div>
  )
}

export default Text