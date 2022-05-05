import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AuthTemplate = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    display:flex;
    background:#999;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const AuthBox = styled.div`
    .logo-area{
        padding-bottom:2rem;
        text-align:center;
    }

    .logo-area > a{ 
        color:#333;
    }

    box-shadow: 0 0 8xp rgba(0,0,0,0.025);
    padding:2rem;
    width:360px;
    background:#fff;
    border-radius: 2px;
`

export const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color:#333;
        text-decoration:underline;

        &:hover {
            color:#666;
        }
    }
`

const AuthLayout = ({children}) => {
    return (
        <AuthTemplate>
            <AuthBox>
                <h1 className="logo-area">
                    <Link to="/">Ingoo</Link>
                </h1>
                {children}
            </AuthBox>
        </AuthTemplate>
    )
}

export default AuthLayout