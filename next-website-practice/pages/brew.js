import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
height: calc(100vh - 30px);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background: #BBC2E2;
position: fixed;`

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900;`

export default function Brew() {
  return (
    <>
      <Head>
        <title>Our Brew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>BREW</Heading>
      </Hero>
    </>
  )
}
