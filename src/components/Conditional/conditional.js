import styles from './conditional.module.css';

import { useState } from "react";

function Conditional (){

    const [conditionalEmail, setConditionalEmail] = useState();
    const [conditionalUserEmail, setConditionalUserEmail] = useState(false);
    const [sendVisible, setSendVisible] = useState(true);
    const [inputBlocked, setInputBlocked] = useState(false);

    function conditionalSendEmail(e){
        e.preventDefault();
        setConditionalUserEmail(conditionalEmail);
        setSendVisible(false); //Esconde a div
        setInputBlocked(true); //Bloqueia o input e-mail
    }

    function conditionalClearEmail(){
        setConditionalUserEmail('');
        setSendVisible(true); //Torna a div visível
        setInputBlocked(false); //Desbloqueia o input e-mail
    }



    return (
        
        <>
        <div className={styles.Conditional}>
            <p className={styles.ConditionalHeader}>Cadastre seu e-mail</p>

                <input className={styles.ConditionalEmail}
                    placeholder='Digite seu e-mail'
                    name='ConditionalEmail'
                    type='email'
                    onChange={(e) => setConditionalEmail(e.target.value)}
                    disabled={inputBlocked} // desabilita o input e-mail
                /><br/>

                    {sendVisible && (
                        <div
                            className={styles.ConditionalSubmit}
                            type='submit'
                            onClick={conditionalSendEmail}
                        >
                            Enviar
                        </div>
                    )}

                    {conditionalUserEmail && (
                        <div>
                            <p>O e-mail do usuário é: {conditionalEmail}</p>
                            <button 
                            onClick={conditionalClearEmail}
                            style={{backgroundColor: 'grey', borderRadius: '10px', padding: '10px'}}
                            >Limpar Email</button>
                        </div>
                    )}
        </div>
        </>

    )
}

export default Conditional