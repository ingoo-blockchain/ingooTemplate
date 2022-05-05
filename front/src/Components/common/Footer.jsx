import styled from 'styled-components'
import Responsive from './Responsive'

const FooterTemplate = styled.div`
    clear: both;
    height:5rem;
    width:100%;
    background:#333;
    color:#fff;
`

const Footer = ({children}) => {
    return (
        <FooterTemplate>
            <Responsive>
                {children}
            </Responsive>
        </FooterTemplate>
    )
}

export default Footer