import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Text = props => {
  const handleText = e => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;

    props.handleSaveText(e);
  };

  return (
    <div className="text-wrapper">
      <div className="text-container">
        <div htmlFor={`text-` + props.id} className="text-input-wrapper">
          <textarea
            className="text-input gratitudes"
            id={props.id}
            placeholder="&nbsp;"
            value={props.text}
            onChange={handleText}
            onKeyDown={handleText}
          />
          <span className="text-label" title="domtoimage-ignore">
            {props.label}
          </span>
          <span
            title="domtoimage-ignore"
            className="text-label-text-border"
          ></span>
          <span
            title="domtoimage-ignore"
            className="close-text"
            onClick={props.handleRemoveText}
          >
            {props.id === "gratitude-0" ? null : (
              <FontAwesomeIcon icon="times-circle" />
            )}
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
          width: 100%;
          text-align: center;
          top: 50px;
          left: 0;
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
          background: #7eb8cb;
          transform: scaleX(0);
          transform-origin: 0 -1;
          transition: all 0.15s ease;
        }
        .text-input-wrapper .text-input {
          text-align: center;
          resize: vertical;
          -webkit-appearance: none;
          width: 100%;
          border: 0;
          padding: 1.2rem 0.5rem 1.2rem 0.5rem;
          font-size: 26px;
          font-weight: 500;
          border-bottom: 1px solid #7eb8cb;
          background: none;
          border-radius: 0;
          color: white;
          transition: all 0.15s ease;
          font-family: sans-serif;
        }
        .text-input-wrapper .text-input:hover {
          background: rgba(34, 50, 84, 0.02);
        }
        .text-input-wrapper .text-input:not(:placeholder-shown) + span {
          color: #7eb8cb;
          transform: translateY(-55px);
        }
        .text-input-wrapper .text-input:focus {
          background: none;
          outline: none;
        }
        .text-input-wrapper .text-input:focus + span {
          color: #7eb8cb;
          transform: translateY(-55px);
        }
        .text-input-wrapper .text-input:focus + span + .text-label-text-border {
          transform: scaleX(1);
        }
        .close-text {
          position: absolute;
          right: 0.5rem;
          color: white;
        }
        .close-text:hover {
          color: #7eb8cb;
        }
      `}</style>
    </div>
  );
};

export default Text;
