import styled from 'styled-components';
import { motion } from "framer-motion";



const CardHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
/* height: 100px; */
`
const CardTitle = styled.h2`
width: 59%;
color: ${({ isLightTheme, theme }) => isLightTheme ? theme.primaryColor : theme.languages};
`

const CardBody = styled.div`
position: relative;
display: inline-block;
overflow: hidden;
text-align: center;
max-width: 335px;
width: 100%;
`

const Description = styled.p`
color: ${({ theme }) => theme.bodyCopy};
`

const Languages = styled.p`
color: ${({ theme }) => theme.div};
`

const Background = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.9);
will-change: opacity;
z-index: 2;
`

const PopoutContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
pointer-events: none;
z-index: 3;
`

const PopoutCard = styled(motion.div)`
background: #fff;
box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.9);
border-radius: 20px;
border: 1px solid grey;
width: 400px;
height: 300px;
padding: 0 5px;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center
`

export {
    CardHeader,
    CardTitle,
    CardBody,
    Description,
    Languages,
    Background,
    PopoutContainer,
    PopoutCard
}
