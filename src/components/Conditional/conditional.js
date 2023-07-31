import style from './conditional.module.css';

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
        console.log(`E-mail "${conditionalEmail.toUpperCase()}" enviado!`);
    }

    function conditionalClearEmail(){
        setConditionalUserEmail(false);
        setConditionalEmail('');
        setSendVisible(true); //Torna a div visível
        setInputBlocked(false); //Desbloqueia o input e-mail
        console.log(`E-mail apagado do input className={style.ConditionalEmail}`);
    }



    return (
        
        <>
        <div className={style.Conditional}>
            <p className={style.ConditionalHeader}>Cadastre seu e-mail</p>

                <input 
                    className={style.ConditionalEmail}
                    placeholder='Digite seu e-mail'
                    name='ConditionalEmail'
                    type='email'
                    value={conditionalEmail}
                    onChange={(e) => setConditionalEmail(e.target.value)}
                    disabled={inputBlocked}
                />

                    {sendVisible && (
                        <button
                            className={style.ConditionalSubmit}
                            type='submit'
                            onClick={conditionalSendEmail}
                        >
                            <span>Enviar</span>
                        </button>
                    )}

                    {conditionalUserEmail && (
                        <div>
                            <p className={style.EmailWrited}>O e-mail do usuário é: {conditionalEmail.toLowerCase()}</p>
                            <button 
                                className={style.ConditionalClear}
                                onClick={conditionalClearEmail}
                                style={{backgroundColor: 'grey', borderRadius: '10px', padding: '10px'}}
                            ><span>Limpar e-mail</span></button>
                        </div>
                    )}
        </div>
        </>

    )
}

export default Conditional