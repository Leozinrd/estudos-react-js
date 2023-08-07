import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const DivConditional = styled.div`
    grid-column-start: 2;
    background-color: #cecece;
    border-radius: 0.625rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ConditionalHeader = styled.p`
    margin: 0.625rem 0;
`

export const ConditionalEmail = styled.input`
    border: 0.0625rem solid ${props => props.disabled ? 'gray' : 'black'};
    border-radius: 0.625rem;
    background-color: white;
    width: 75%;
    margin: 0 0 0.625rem 0;

    ${props =>
        props.disabled &&
        css`
          background-color: #000000;
          color:white;
        `}
`

export const ConditionalSubmit = styled.button`
    padding: 0.1em 0.25em;
    width: 13em;
    height: 4.2em;
    background-color: #212121;
    border: 0.08em solid #fff;
    border-radius: 0.3em;
    font-size: 0.75rem;
    margin-top: 0.9375rem;
`

export const SpanEnviar = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: 8.25em;
    height: 2.5em;
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.5em;
    color: #fff;
    border: 0.08em solid #fff;
    box-shadow: 0 0.4em 0.1em 0.019em #fff;

    &:hover{
        transition: all 0.5s;
        transform: translate(0, 0.4em);
        box-shadow: 0 0 0 0 #fff;      
        cursor: pointer;
    };

    &:not(hover){
        transition: all 1s; 
    }
`

export const EmailWrited = styled.p`
    background-color: aliceblue;
    border-radius: 0.625rem;
    padding: 1.0.3125rem 0.3125rem;
    font-size: smaller;
    margin: 0 0 0.625rem 0;
`

export const ConditionalClear = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 1.0625rem;
    border-radius: 31.25rem;
    overflow: hidden;
    background: #66ff66;
    color: ghostwhite;

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        content: "";
        background: #000;
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    };

    &::after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    &:hover::before{
        transform: translate3d(100%, 0, 0);
    }
`

export const SpanClear = styled.span`
    position: relative;
    z-index: 10;
    transition: color 0.4s;

    &:hover{
        color: black;
    }
`