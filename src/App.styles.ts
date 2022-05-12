import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(${props => props.theme.background}, ${props => props.theme.backgroundGradient});
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`
export const Header = styled.h1`
    display: flex;    
    margin: 0;
    padding: 0;
    color: ${props => props.theme.text};
    text-align: center;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.primary};
    padding-bottom: 20px;
    margin-bottom: 20px;
`