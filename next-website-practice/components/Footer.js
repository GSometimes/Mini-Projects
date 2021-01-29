import styled from 'styled-components'

const FooterSection = styled.div`
background: #000;
color: #fff;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
width: 100vw;`

const Footer = () => {
    return (
        <FooterSection>
            <p>Next Practice by Sometimes</p>
        </FooterSection>
    )
}

export default Footer
