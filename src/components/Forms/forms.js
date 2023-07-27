import stylesForms from './forms.module.css'
import stylesFormDados from './formDados.module.css';
import FormUser from './formUser.module.css';

function Form(){

    function register(e){
        e.preventDefault();
        console.log(`Daddos enviados com sucesso!`);
    }

    function loginUser(e){
        e.preventDefault();
        console.log('Login efetuado');
    }

    return(
        <>
        <section className={stylesForms.Forms}>
            <form onSubmit={register} className={stylesFormDados.FormDados}>
                
                <label className={stylesFormDados.Lb} htmlFor="name">Nome:</label>
                    <input name="nome" id='nome' type='text' className={stylesFormDados.Infos} placeholder='Nome Completo'/>

                    <label htmlFor='email' className={stylesFormDados.Lb}>Email:</label>
                    <input htmlFor='email' id='email' type='email' className={stylesFormDados.Infos} placeholder='seuemail@domínio.com.br'/>

                    <button id={stylesFormDados.Send} type='submit'>Enviar</button>
                    <button id={stylesFormDados.Clear} type='reset'>Limpar</button>

            </form>

            <section className={FormUser.LoginBox}>
                <form onSubmit={loginUser} className={FormUser.FormUser}>
                    <div className={FormUser.UserBox}>
                        <label htmlFor='name'>Usuário:</label>
                        <input type='text' id='name' name='name' placeholder='Digite seu usuário' required=''></input>
                    </div>
                    <div className={FormUser.UserBox}>
                        <label htmlFor='password'>Senha:</label>
                        <input type='password' id='password' name='password' placeholder='Digite sua senha' required=''></input>
                    </div><center>
                    <a>SEND
                        <span></span>
                    </a></center>
                </form>
            </section>
        </section>
        </>
    )
}

export default Form;