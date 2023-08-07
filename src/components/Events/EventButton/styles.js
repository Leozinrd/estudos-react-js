import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


const animStar = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
`

const animStarRotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
`

const gradient301 = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`

const pulse3011 = keyframes`
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 0.625rem rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`

export const ContainerStars = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;

    &:hover{
        z-index: 1;
        background-color: #212121;
    }
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
    animation: ${gradient301} 5s ease infinite;
    border: double 0.25rem transparent;
    background-image: linear-gradient(#212121, #212121),  linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    };

    &:active{
        border: double 0.25rem #FE53BB;
        background-origin: border-box;
        background-clip: content-box, border-box;
        animation: none;
    };

    &:hover 
`

export const Strong = styled.strong`
    z-index: 2;
    font-family: 'Avalors Personal Use';
    font-size: 0.75rem;
    letter-spacing: 0.3125rem;
    color: #FFFFFF;
    text-shadow: 0 0 0.25rem white;
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
        animation: ${animStarRotate} 90s linear infinite;
        background-image: radial-gradient(#ffffff 0.0625rem, transparent 1%);
        background-size: 3.125rem 3.125rem;
    };

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: -50%;
        width: 170%;
        height: 500%;
        animation: ${animStar} 60s linear infinite;
        background-image: radial-gradient(#ffffff 0.0625rem, transparent 1%);
        background-size: 3.125rem 3.125rem;
        opacity: 0.5;
    }
`

export const Glow = styled.div`
    position: absolute;
    display: flex;
    width: 12rem;
`

export const Circle = styled.div`
    width: 100%;
    height: 1.875rem;
    filter: blur(2rem);
    animation: ${pulse3011} 4s infinite;
    z-index: -1;

    &:nth-of-type(1){
        background: rgba(254, 83, 186, 0.636);}

    &:nth-of-type(2){
        background: rgba(142, 81, 234, 0.704);}
`