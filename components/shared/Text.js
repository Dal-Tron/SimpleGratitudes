import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Text = props => {
  const handleKeyDown = e => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div className="text-wrapper" >
      <div className="text-container">
        <div htmlFor={`text-` + props.id} className="text-input-wrapper">
          <textarea
            className="text-input grateful"
            id={props.id}
            placeholder="&nbsp;"
            value={props.text}
            onChange={props.handleSaveText}
            onKeyDown={handleKeyDown}
          />
          <span className="text-label">{props.label}</span>
          <span title="domtoimage-ignore" className="text-label-text-border"></span>
          <span title="domtoimage-ignore" className="close-text" onClick={props.handleRemoveText}>
            {props.id === 'gratitude-0' || props.id === 'vision-0' ? null : <FontAwesomeIcon icon="times-circle" />}
          </span>
        </div>
      </div>
      <style jsx>{`
          .text-wrapper {
            position: relative;
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
          }
          .text-container {
            padding-top: 2rem;
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
            font-size: 20px;
            color: white;
            font-weight: 500;
            transform-origin: 0 0;
            transition: all 0.2s ease;
            font-family: sans-serif;
          }
          .text-input-wrapper .text-label-text-border {
            position: absolute;
            bottom: 2px;
            left: 0;
            height: 2px;
            width: 100%;
            background: white;
            transform: scaleX(0);
            transform-origin: 0 -1;
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
            border-bottom: 1px solid white;
            background: none;
            border-radius: 0;
            color: white;
            transition: all 0.15s ease;
            font-family: sans-serif;
          }
          .text-input-wrapper .text-input:hover {
            background: rgba(34,50,84,0.03);
          }
          .text-input-wrapper .text-input:not(:placeholder-shown) + span {
            color: white;
            transform: translateY(-26px) scale(0.75);
          }
          .text-input-wrapper .text-input:focus {
            background: none;
            outline: none;
          }
          .text-input-wrapper .text-input:focus + span {
            color: white;
            transform: translateY(-26px) scale(0.75);
          }
          .text-input-wrapper .text-input:focus + span + .text-label-text-border {
            transform: scaleX(1);
          }
          .close-text {
            position: absolute;
            top: -1rem;
            right: .5rem;
            color: white;
          }
          .close-text:hover {
            color: #ff6b6b;
          }
        `}</style>
    </div>
  )
}

export default Text