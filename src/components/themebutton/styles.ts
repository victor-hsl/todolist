import styled from 'styled-components'

export const Button = styled.label`
    display: block;
    width: 60px;
    height: 31px;
    border: 2px solid ${props => props.theme.text};
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    margin-left: 15px;

    #checkbox {
        display: none;
    }
    
    #checkbox:checked + .ball {
        transform: translate(29px, -50%);
    }

    .ball, .sun, .moon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);    
    }
    .ball {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-color: ${props => props.theme.text};
        border-radius: 50%;
        left: 1px;
        z-index: 10;
        transition: transform .5s ease-in-out;
    }
    
    .sun {
        left: 5px;
    }
    
    .moon {
        right: 6px;
    }
    
`