import axios from 'axios'
import {USER_LOGIN} from '../reducers/user'
import takersAll from './takersAll'


async function login(action){
    const result = await axios.post('/user/login',action.payload)
    const { token } = result.data
    const response = await axios.post('/user/me',{},{
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
    return response
}


const result = [
    [USER_LOGIN.REQUEST.toString(),login]
]

export default result