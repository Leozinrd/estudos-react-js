import {useState} from 'react';

import {
    Forms,
    FormDados,
    Label,
    Infos,
    Send,
    Clear,
    LoginBox,
    FormUser,
    UserBox,
    Login
} from './styles';


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
        <Forms>
            <FormDados onSubmit={register}>
                
                <Label htmlFor="userName">Nome:</Label>
                    <Infos 
                    name="userName" 
                    id='userName' 
                    type='text'  
                    placeholder='Nome Completo' 
                    onChange={(e) => setUserName(e.target.value)} 
                    required/>

                    <Label htmlFor='email'>Email:</Label>
                    <Infos 
                    htmlFor='email' 
                    id='email' 
                    type='email' 
                    placeholder='seuemail@domínio.com.br' 
                    onChange={(e) => setUserEmail(e.target.value)} 
                    required/>

                    <Send type='submit'>Enviar</Send>
                    <Clear type='reset'>Limpar</Clear>

            </FormDados>

            <LoginBox>
                <FormUser onSubmit={loginUser}>
                    <UserBox>
                        <label htmlFor='userLogin'>Usuário:</label>
                        <input 
                        type='text' 
                        id='userLogin' 
                        name='userLogin'
                        placeholder='Digite seu usuário' 
                        onChange={(e) => setUserLogin(e.target.value)} 
                        required/>
                    </UserBox>
                    <UserBox>
                        <label htmlFor='password'>Senha:</label>
                        <input 
                        type='password' 
                        id='password'
                        name='password' 
                        placeholder='Digite sua senha' 
                        required/>
                    </UserBox>
                    <center><Login // onClick={loginUser} 
                    >SEND
                        <span></span>
                    </Login></center>
                </FormUser>
            </LoginBox>
        </Forms>
        </>
    )
}

export default Form;