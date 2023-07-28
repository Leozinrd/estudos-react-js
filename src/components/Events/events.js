import styles from './events.module.css';

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
            <div className={styles.Buttons}>
                <section className={styles.ButtonsSection}>
                    <EventButton event={FirstEventActivate} text="Teste primeiro evento"/>
                    <EventButton event={SecondEventActivate} text="Teste segundo evento"/>
                </section>
            </div>
        </>
    )

}

export default Events