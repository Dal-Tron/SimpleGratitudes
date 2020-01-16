import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTextIcon = props => {
  return (
    <div className="icon-container">
      <div
        title="domtoimage-ignore"
        onClick={props.handleAdd}
        className="icon icon-plus"
        style={{ position: "absolute" }}
      >
        <FontAwesomeIcon icon="plus" />
      </div>
      <div onClick={props.handleAdd} className="icon">
        <FontAwesomeIcon icon="leaf" />
      </div>
      <style jsx>{`
        .icon-container {
          position: relative;
          height: 10rem;
          text-align: center;
          width: 2rem;
          margin-left: auto;
          margin-right: auto;
        }
        .icon {
          text-align: center;
          color: white;
          font-size: 2rem;
          background: #5190a5;
          padding: 1rem;
        }
        .icon-plus {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default AddTextIcon;
