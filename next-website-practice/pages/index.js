import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
height: calc(100vh - 30px);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background: #124E78;
position: fixed;
`

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900;`

export default function Home() {
  return (
    <>
      <Head>
        <title>PRSSD COFEE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>GET PRSSD.</Heading>
      </Hero>
    </>
  )
}
