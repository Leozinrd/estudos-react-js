import styles from './forms.module.css';

function Form(){
    return(
        <>
        <section className={styles.Forms}>
            <form className={styles.FormUser}>
                <label className={styles.Lb} htmlFor="name">Nome:</label>
                    <input name="nome" id='nome' type='text' className={styles.Infos} placeholder='Nome Completo'/>

                    <label htmlFor='email' className={styles.Lb}>Email:</label>
                    <input htmlFor='email' id='email' type='email' className={styles.Infos} placeholder='seuemail@domínio.com.br'/>

                    <button id={styles.Send} type='submit'>Enviar</button>
                    <button id={styles.Clear} type='reset'>Limpar</button>

            </form>
        </section>
        </>
    )
}

export default Form;