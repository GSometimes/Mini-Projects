import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
height: 50px;
background: #000;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`;

const StyledLink = styled.a`
padding: 0rem 2rem;`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLink>PRSSD</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/beans" passHref>
                    <StyledLink>BEANS</StyledLink>
                </Link>

                <Link href="/brew" passHref>
                    <StyledLink>BREW</StyledLink>
                </Link>
                <Link href="/roast" passHref>
                    <StyledLink>ROAST</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
