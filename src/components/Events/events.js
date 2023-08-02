import {
    Buttons,
    ButtonsSection
} from './styles'

import EventButton from "./EventButton/eventButton"

function Events(){

    function FirstEventActivate(){
        console.log(`Primeiro evento tivado!`)
    }

    function SecondEventActivate() {
        console.log(`Segundo evento ativado!`)
    }

    return(
        <>
            <Buttons>
                <ButtonsSection>
                    <EventButton event={FirstEventActivate} text="Teste primeiro evento"/>
                    <EventButton event={SecondEventActivate} text="Teste segundo evento"/>
                </ButtonsSection>
            </Buttons>
        </>
    )

}

export default Events