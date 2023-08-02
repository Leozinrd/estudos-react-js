import styled from "@emotion/styled";

export const Forms = styled.section`
    display: flex;
    padding: 0 0 1rem 0;
    margin-top: 5%;
    justify-content: space-evenly;
`

export const FormDados = styled.form`
    background-color: #cecece;
    border-radius: 10px;
    padding: 20px;
    width: 340px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: bold;
`

export const Infos = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    background-color: #a1a1a1;
    color: white;
`

export const Send = styled.button`
    --glow-color: rgb(176,255,189);
    --glow-spread-color: rgba(123,255,160,0.781);
    --enhanced-glow-color: rgb(182,175,71);
    --btn-color: rgba(13,241,21, 0.508);
    border: .25em solid var(--glow-color);
    padding: 1em 2em;
    color: black;
    font-size: 14px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em .25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 .05em var(--glow-color);
    text-shadow: 0 0 .05em var(--glow-color);
    position: relative;
    transition: all 0.3s;

    &::after{
        pointer-events: none;
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--glow-spread-color);
        filter: blur(2em);
        opacity: .7;
        transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
    }

    &:hover{
        color: var(--btn-color);
        background-color: var(--glow-color);
        box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 2em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
        cursor: pointer;
    }
`

export const Clear = styled.button`
    --glow-color: (255,176,176);
    --glow-spread-color: rgba(255,123,123, 0.781);
    --enhanced-glow-color: rgb(182,175,71);
    --btn-color: rgba(241,13,13,0.508);
    border: .25em solid var(--glow-color);
    padding: 1em 2em;
    color: var(--glow-color);
    font-size: 14px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow:  0 0 1em .25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 .05em var(--glow-color);
    text-shadow: 0 0 .05em var(--glow-color);
    position: relative;
    transition: all 0.3s;  

    &::after{
        pointer-events: none;
        content: '';
        position: absolute;
        top: 120%;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--glow-spread-color);
        filter: blur(2em);
        opacity: .7;
        transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
    }

    &:hover{
        color: var(--btn-color);
        background-color: var(--glow-color);
        box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 2em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
        cursor: pointer;
    }
`

export const LoginBox = styled.section`

`

export const FormUser = styled.form`

`

export const UserBox = styled.div`

`

export const Login = styled.button`

`