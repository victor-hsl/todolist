import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    body {
        background: ${props => props.theme.background};
    }
`