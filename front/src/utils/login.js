export const validate = ({email,password}) => {
    const errors = {}

    if(!email){
        errors.email = "이메일이 입력되지 않았습니다."
    } else if( !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email) ){
        // 
        errors.email = "입력된 이메일이 유효하지 않습니다."
    }

    if(!password){
        errors.password = "비밀번호가 입력되지 않았습니다."
    } else if (password.length < 4) {
        errors.password = "4자 이상의 패스워드를 사용해야 합니다."
    }

    return errors 
}