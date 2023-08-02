import styled from "@emotion/styled";


export const ContainerStars = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 3rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),  linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    };

    &:active{
        border: double 4px #FE53BB;
        background-origin: border-box;
        background-clip: content-box, border-box;
        animation: none;
    }
`

export const Strong = styled.strong`
    z-index: 2;
    font-family: 'Avalors Personal Use';
    font-size: 12px;
    letter-spacing: 5px;
    color: #FFFFFF;
    text-shadow: 0 0 4px white;
`

export const Stars = styled.div`
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;

    &::after{
        content: "";
        position: absolute;
        top: -10rem;
        left: -100rem;
        width: 100%;
        height: 100%;
        animation: animStarRotate 90s linear infinite;
        background-image: radial-gradient(#ffffff 1px, transparent 1%);
        background-size: 50px 50px;
    }
`

export const Glow = styled.div`
    position: absolute;
    display: flex;
    width: 12rem;
`

export const Circle = styled.div`
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;

    &:nth-of-type(1){
        background: rgba(254, 83, 186, 0.636);}

    &:nth-of-type(2){
        background: rgba(142, 81, 234, 0.704);}
`