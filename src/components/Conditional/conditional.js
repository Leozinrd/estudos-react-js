import { useState } from "react";

import {
    DivConditional,
    ConditionalHeader,
    ConditionalEmail,
    ConditionalSubmit,
    EmailWrited,
    ConditionalClear,
    SpanEnviar,
    SpanClear
} from './styles'


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
        console.log(`E-mail apagado do input className=ConditionalEmail`);
    }



    return (
        
        <>
        <DivConditional>
            <ConditionalHeader>Cadastre seu e-mail</ConditionalHeader>

                <ConditionalEmail
                    placeholder='Digite seu e-mail'
                    name='ConditionalEmail'
                    type='email'
                    value={conditionalEmail}
                    onChange={(e) => setConditionalEmail(e.target.value)}
                    disabled={inputBlocked}
                />

                    {sendVisible && (
                        <ConditionalSubmit
                            type='submit'
                            onClick={conditionalSendEmail}
                        >
                            <SpanEnviar>Enviar</SpanEnviar>
                        </ConditionalSubmit>
                    )}

                    {conditionalUserEmail && (
                        <div>
                            <EmailWrited>O e-mail do usuário é: {conditionalEmail.toLowerCase()}</EmailWrited>
                            <ConditionalClear
                                onClick={conditionalClearEmail}
                                style={{backgroundColor: 'grey', borderRadius: '10px', padding: '10px'}}
                            ><SpanClear>Limpar e-mail</SpanClear></ConditionalClear>
                        </div>
                    )}
        </DivConditional>
        </>

    )
}

export default Conditional