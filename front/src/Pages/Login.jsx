import { Link } from "react-router-dom"
import AuthLayout, { Footer } from "../Components/auth/AuthLayout"
import { AuthInputBox } from "../Components/form/inputs"
import { StyledButton } from "../Components/form/buttons"
import { useDispatch } from "react-redux"
import useForm from '../Hook/useForm'
import { validate } from '../utils/login'

const Login = () => {
    const dispath = useDispatch()
    const initialState = { email:'', password:'' }
    const onSubmit = (values) => { 
        dispath({type:'USER/LOGIN_REQUEST'})
    }
    const {email,password, errors, submit, handleSubmit} = useForm(initialState,onSubmit,validate)

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