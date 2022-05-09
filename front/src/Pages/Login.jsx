import { Link } from "react-router-dom"
import AuthLayout, { Footer } from "../Components/auth/AuthLayout"
import { AuthInputBox } from "../Components/form/inputs"
import { StyledButton } from "../Components/form/buttons"
import { useDispatch, useSelector } from "react-redux"
import useForm from '../Hook/useForm'
import { validate } from '../utils/login'
import { USER_LOGIN } from '../reducers/user'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispath = useDispatch()
    const navigate = useNavigate();
    const user = useSelector( state => state.user )
    const initialState = { email:'', password:'' }
    const onSubmit = (payload) => { 
        dispath(USER_LOGIN.REQUEST({...payload}))
    }
    const {email,password, errors, submit, handleSubmit} = useForm(initialState,onSubmit,validate)

    useEffect( ()=>{
        if ( user.isLogin === true ) { 
            navigate('/')
            alert('로그인 성공이라네~?')
        }
    },[user.isLogin,navigate] )

    return (
        <>
            <AuthLayout>
                <form onSubmit={handleSubmit}>
                    <h3>로그인</h3>
                    <AuthInputBox type='text' name='email' {...email} placeholder="아이디를 입력해주세요." />
                    {errors.email && <span>{errors.email}</span>}
                    <br />
                    <AuthInputBox type='password' name='password' {...password} placeholder="패스워드를 입력해주세요." />
                    {errors.password && <span>{errors.password}</span>}
                    <br />
                    <StyledButton fullWidth type="submit" disabled={submit}>로그인</StyledButton>
                </form>
                <Footer >
                    <Link to="/register">회원가입</Link>
                </Footer>
            </AuthLayout>
        </>
    )
}

export default Login