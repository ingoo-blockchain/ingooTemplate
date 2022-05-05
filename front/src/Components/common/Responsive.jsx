import styled from 'styled-components'

const ResponsiveTemplate = styled.div`
    padding:0 1rem;
    width:1024px;
    margin:0 auto;

    @midea (max-width: 1024px){
        width:768px;
    }

    @meida (max-width: 768px){
        width:100%;
    }
`

const Responsive = ({children, ...rest}) => {
    return <ResponsiveTemplate {...rest}>{children}</ResponsiveTemplate>
}

export default Responsive