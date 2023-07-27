import './buttonActivate.css';

function EventButton (props){
    return(
        <button className="btn" onClick={props.event} type="button">
          <strong>{props.text}</strong>
              <div id="container-stars">
              <div id="stars"></div>
          </div>
          <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
          </div>
      </button>
    )
}

export default EventButton