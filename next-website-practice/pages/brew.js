import Head from 'next/head'
import styled from 'styled-components'

const imgUrl = 'https://res.cloudinary.com/dvug8hy5k/image/upload/v1611989755/Portfolio1/jennifer-bedoya-ryNPr5HSxfk-unsplash_iff0bu.jpg'


const Hero = styled.div`
height: calc(100vh - 30px);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${imgUrl});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: fixed;`

const Heading = styled.h1`
color: #fff;
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
        <Heading>BREW.</Heading>
      </Hero>
    </>
  )
}
