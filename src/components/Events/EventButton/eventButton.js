// import './buttonActivate.css';
import {
    Button,
    Strong,
    ContainerStars,
    Stars,
    Glow,
    Circle
} from './styles'

function EventButton (props){
    return(
        <Button onClick={props.event} type="button">
          <Strong>{props.text}</Strong>
              <ContainerStars>
              <Stars></Stars>
          </ContainerStars>
          <Glow>
              <Circle></Circle>
              <Circle></Circle>
          </Glow>
      </Button>
    )
}

export default EventButton