import { Link } from "react-router-dom"
import AuthLayout, { Footer } from "../Components/auth/AuthLayout"
import { AuthInputBox } from "../Components/form/inputs"
import { StyledButton } from "../Components/form/buttons"

const Login = () => {
    return (
        <>
            <AuthLayout>
                <form>
                    <h3>로그인</h3>
                    <AuthInputBox type='text' name='userid' placeholder="아이디를 입력해주세요." />
                    <br />
                    <AuthInputBox type='password' name='userid' placeholder="패스워드를 입력해주세요." />
                    <br />
                    <StyledButton fullWidth type="submit">로그인</StyledButton>
                </form>
                <Footer >
                    <Link to="/register">회원가입</Link>
                </Footer>
            </AuthLayout>
        </>
    )
}

export default Login