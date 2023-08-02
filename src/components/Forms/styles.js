import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


const btnAnim1 = keyframes`
  0% {
    left: -100%;
  }

  50%, 100% {
    left: 100%;
  }
`

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
    width: 340px;
    height: fit-content;
    padding: 40px;
    background: rgba(24, 20, 20, 0.987);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
`

export const FormUser = styled.form``

export const UserBox = styled.div``

export const Login = styled.button`
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;

    &:hover{
        background: #03f40f;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03f40f,
                    0 0 25px #03f40f,
                    0 0 50px #03f40f,
                    0 0 100px #03f40f;
        cursor: pointer;
    }
`

export const Span = styled.span`
    position: absolute;
    display: block;

    &:nth-child(1){
        bottom: 2px;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03f40f);
        animation: ${btnAnim1} 2s linear infinite;
    }
`

export const UserInput = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
`

export const UserLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
`