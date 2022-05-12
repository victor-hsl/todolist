import styled from 'styled-components'

type ContainerProps = {
    done: boolean,
    secondary: string,
    text: string
}


export const Container = styled.div(({done, secondary, text} : ContainerProps) => (
    `
    display: flex;
    background-color: ${secondary};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: ${text};
        width: 100%;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
))