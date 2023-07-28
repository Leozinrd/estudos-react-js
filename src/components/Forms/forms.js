import stylesForms from './forms.module.css'
import stylesFormDados from './formDados.module.css';
import FormUser from './formUser.module.css';

import {useState} from 'react';

function Form(){

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    function register(e){
        e.preventDefault();
        console.log(`${userName}, seus dados foram enviados com sucesso! \n O e-mail de cadastro foi ${userEmail}`);
    }


    const [userLogin, setUserLogin] = useState();

    function loginUser(e){
        e.preventDefault();
        console.log(`${userLogin}\n login efetuado!`);
    }

    return(
        <>
        <div className={stylesForms.Forms}>
            <section className={stylesForms.FormsSection}>
                <form onSubmit={register} className={stylesFormDados.FormDados}>
                    
                    <label className={stylesFormDados.Lb} htmlFor="userName">Nome:</label>
                        <input className={stylesFormDados.Infos} 
                        name="userName" 
                        id='userName' 
                        type='text'  
                        placeholder='Nome Completo' 
                        onChange={(e) => setUserName(e.target.value)} 
                        required/>
    
                        <label htmlFor='email' className={stylesFormDados.Lb}>Email:</label>
                        <input className={stylesFormDados.Infos} 
                        htmlFor='email' 
                        id='email' 
                        type='email' 
                        placeholder='seuemail@domínio.com.br' 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        required/>
    
                        <button id={stylesFormDados.Send} type='submit'>Enviar</button>
                        <button id={stylesFormDados.Clear} type='reset'>Limpar</button>
        
                </form>
        
                <section className={FormUser.LoginBox}>
                    <form onSubmit={loginUser} className={FormUser.FormUser}>
                        <div className={FormUser.UserBox}>
                            <label htmlFor='userLogin'>Usuário:</label>
                            <input 
                            type='text' 
                            id='userLogin' 
                            name='userLogin'
                            placeholder='Digite seu usuário' 
                            onChange={(e) => setUserLogin(e.target.value)} 
                            required/>
                        </div>
                        <div className={FormUser.UserBox}>
                            <label htmlFor='password'>Senha:</label>
                            <input 
                            type='password' 
                            id='password'
                            name='password' 
                            placeholder='Digite sua senha' 
                            required/>
                        </div><center>
                        <button className={FormUser.Login} onClick={loginUser}>SEND
                            <span></span>
                        </button></center>
                    </form>
                </section>
            </section>
        </div>
        </>
    )
}

export default Form;