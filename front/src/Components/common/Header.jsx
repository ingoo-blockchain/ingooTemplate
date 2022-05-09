import styled from 'styled-components'
import Responsive from './Responsive'
import { StyledButton } from '../form/buttons'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGOUT } from '../../reducers/user'
import { Link } from 'react-router-dom'

const HeaderTemplate = styled.div`
    position: fixed;
    width:100%;
    background:#fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`

const Wrapper = styled(Responsive)`
    height:4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        font-size: 1.125rem;
        letter-spacing: 2px;
    }

    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > li {
            margin-left: 0.75rem;
        }

        & > li > a {
            font-size:1.2rem;
        }
    }
`

const Spacer = styled.div`
    height:6rem;
`

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const logout = () => {
        dispatch(USER_LOGOUT.REQUEST())
    }

    return (
        <>
        <HeaderTemplate>
            <Wrapper>
                <h1 className='logo'>
                    INGOO
                </h1>
                <ul className='menu'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="Counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="Comment">Comment</Link>
                    </li>
                    {
                        user.isLogin 
                        ? <li><Button onClick={logout}>로그아웃</Button></li>
                        : <li><Button to="/Login">로그인</Button></li>
                    }
                    
                </ul>
            </Wrapper>
        </HeaderTemplate>
        <Spacer />
        </>
    )
}

export default Header