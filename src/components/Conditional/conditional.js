import styles from './conditional.module.css';

import { useState } from "react";

function Conditional (){

    const [conditionalEmail, setConditionalEmail] = useState();
    const [conditionalUserEmail, setConditionalUserEmail] = useState();

    function conditionalSendEmail(e){
        e.preventDefault();
        setConditionalUserEmail(conditionalEmail);
    }

    function conditionalClearEmail(){
        setConditionalUserEmail('')
    }



    return (
        
        <>
        <div className={styles.Conditional}>
            <h2 className={styles.ConditionalHeader}>Cadastre seu e-mail</h2>

                <form className='ConditionalEmail'>

                    <input 
                        type="email"
                        placeholder="Digite seu e-mail"
                        required
                        onChange={(e) => setConditionalEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={conditionalSendEmail}
                        style={{backgroundColor: 'grey', borderRadius: '10px', padding : '10px'}}
                    >Enviar e-mail</button>
                    {conditionalUserEmail && (
                        <div>
                            <p>O e-mail do usuário é: {conditionalEmail}</p>
                            <button onClick={conditionalClearEmail}
                            style={{backgroundColor: 'grey', borderRadius: '10px', padding: '10px'}}
                            >Limpar Email</button>
                        </div>
                    )}

                </form>


        </div>
        </>

    )
}

export default Conditional