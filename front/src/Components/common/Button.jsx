
import { StyledButton } from "../form/buttons"
import { useNavigate } from "react-router-dom";

const Button = ({to, history, ...rest}) => {
    const navigate = useNavigate()
    const onClick = e => {
        console.log(to)
        if (to) {
            navigate(to)
        }

        if (rest.onClick) {
            rest.onClick(e)
        }
    }

    return <StyledButton {...rest} onClick={onClick} />
}

export default Button