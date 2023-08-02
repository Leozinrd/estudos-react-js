import PropTypes from 'prop-types';
import { Talking } from './styles';

function TalkWithMe({nickname}){

    return(
        <>
            <Talking>Hello {nickname}, are you ok?</Talking>
        </>
    )

}

TalkWithMe.propTypes = {
    nickname: PropTypes.string.isRequired,
}

export default TalkWithMe;