import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArrowDownLight from './../../images/button-arrow-down-light.svg';
import ArrowDownDark from './../../images/button-arrow-down-dark.svg';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

//Styled Components

const HeaderContainer = styled.div`
  padding: 0 12px;
    border-radius: 0 0 50% 50% / 70px;
    /* margin-bottom: 38px; */
`
const Languages = styled.div`
  height: 32px;
  width: 72px;
  border-radius: 20.19px;
  display: flex; 
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 5px;
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.languages};
  & > h5 {
        font-weight: 300;
    }
`
const LanguageTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
        margin: 24px 0 0 0;

`
const Div = styled.p`
  color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.div};
  margin: 20px 0 0 0;
`
const Lucy = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin: 3px 0 0 0;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  margin: 12px 0 0 0;
`

const LanguageList = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  margin: 12px 0;
`
const ArrowDown = styled.img`
    margin: 0;
    position: relative;
    top: 52px;

`



const Header = () => {
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const languagesArray = [
    'JavaScript', 'React', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap'
  ]
  return (
    <div style={{ background: theme.background }}>
      <HeaderContainer style={{
        padding: '10px',
        background: `linear-gradient(
              180deg
              , ${theme.gradientOne} 0%, ${theme.gradientTwo} 100%`
      }}>
        <div id="header">
          <Div isLightTheme={isLightTheme} theme={theme}>&lt;div&gt;</Div>
          <Lucy theme={theme}>I am Lucy.</Lucy>
          <Title theme={theme}>A full stack web developer based in sunny Barcelona</Title>
          <LanguageList theme={theme}>I speak JavaScript, React.js, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, English, Italian and Spanish. When I'm not coding, I'm probaby dreaming about it. :&#41;</LanguageList>
        </div>
        <LanguageTabs>
          {languagesArray.map((language, index) => {
            return <Languages key={index} isLightTheme={isLightTheme} theme={theme}>
              <h5>{language}</h5>
            </Languages>
          })}
        </LanguageTabs>
        <a href="#about">
          {isLightTheme ?
            <ArrowDown src={ArrowDownLight} alt="icon of arrow pointing down"></ArrowDown>
            :
            <ArrowDown src={ArrowDownDark} alt="icon of arrow pointing down"></ArrowDown>
          }
        </a>
      </HeaderContainer>
    </div>
  );
}

export default Header;
