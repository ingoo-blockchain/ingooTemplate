import styled from 'styled-components'

export const AuthInputBox = styled.input`
    font-size:1rem;
    border:none;
    border-bottom:1px solid #666;
    padding:0.5rem 0;
    outline:none;
    width:100%;
    &:focus {
        border-bottom: 1px solid #999;
    }

    & + & {
        margin-top:1rem;
    }
`