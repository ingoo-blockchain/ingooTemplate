import axios from 'axios'
import {USER_LOGIN} from '../reducers/user'
import takersAll from './takersAll'



async function login(action){
    return await axios.post('/user/login',action.payload)
    // return true
}

const result = [
    [USER_LOGIN.REQUEST.toString(),login]
]

export default result