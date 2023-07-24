import './btn.css';
import styles from './Events.module.css';

import PropTypes from 'prop-types';

function Events(){

    function OnClickButtonActivate({Phrase}){
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

Events.propTypes = {
    Phrase: PropTypes.string,
}


export default Events