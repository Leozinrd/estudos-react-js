import './buttonActivate.css';
import styles from './events.module.css';

// import PropTypes from 'prop-types';

function Events({Phrase}){

    function OnClickButtonActivate(){
        console.log(`Ativado ${Phrase}`);
    }

    return(
        <>
        <div className={styles.Buttons}>
                <button onClick={OnClickButtonActivate} className="btn" type="button">
                  <strong>Activate!</strong>
                      <div id="container-stars">
                      <div id="stars"></div>
                  </div>
                  <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                  </div>
              </button>
        </div>
        </>
    )

}

export default Events