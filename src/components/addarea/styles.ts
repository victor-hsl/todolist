import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    align-items: center;

    .image {
        margin-right: 5px;
        color: ${props => props.theme.primary}
    }

    input {
        background: transparent;
        border: 0px;
        outline: 0;
        color: ${props => props.theme.text};
        font-size: 18px;
        flex: 1
        
    }

    input::placeholder {
        color: ${props => props.theme.primary};
    }
`