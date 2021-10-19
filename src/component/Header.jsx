import styled from 'styled-components'
import {Container} from "./Container";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {useState, useEffect} from 'react'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({
    href: '/',
})``;
const ModeSwitcher = styled.div``;

export const Header = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (<HeaderEl>
        <Container>
            <Wrapper>
                <Title>
                    Where is the world? </Title>
                <ModeSwitcher onClick={toggleTheme}>
                    <IoMoon/> Light theme
                </ModeSwitcher>

            </Wrapper>
        </Container>
    </HeaderEl>)
}