import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        primary: string;
        secondary: string;
        background: string;
        backgroundGradient: string;
        text: string;
    }
}