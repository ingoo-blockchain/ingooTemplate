import styled from 'styled-components'

const Template = styled.div`
    min-height:768px;

    @midea (max-width: 1024px){
        min-height :568px;
    }

    @meida (max-width: 768px){
        min-width:100%;
    }
`

const Container = ({children}) => {
    return (
        <Template>
            {children}
        </Template>
    )
}

export default Container