import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background: url(${({ image }) => image && image}) center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
    `;

const Container = styled.div`
    color: white;
    padding: 1rem;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,0.4);
    margin: 1rem;
    border-radius: 10px;
    
    h1{
        font-size: clamp(2rem, 7vw, 5rem);
        margin-bottom: 0.5rem;
    }
    p{
        font-size: clamp(1rem, 4vw, 2rem);
        margin-bottom: 1rem;
    }

    button {
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #000;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }

    `;

const Hero = ({image , title, description}) => {
    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Learn More</button>
            </Container>
        </Section>

    )
}

export default Hero
