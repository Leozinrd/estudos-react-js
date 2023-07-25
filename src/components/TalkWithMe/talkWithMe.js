import styles from './talkWithMe.module.css'
import PropTypes from 'prop-types';

function TalkWithMe({nickname}){

    return(
        <>
            <p className={styles.Talking}>Hello {nickname}, are you ok?</p>
        </>
    )

}

TalkWithMe.propTypes = {
    nickname: PropTypes.string.isRequired,
}

export default TalkWithMe;