import { useEffect, useCallback, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux';

const usePersistedState = (key, initialState) => {
    const dispatch = useDispatch()
    const user = useCallback(useSelector( state => state.user ),[dispatch])

    const result = useMemo( ()=> {
        const storagedState = localStorage.getItem(key);
        return storagedState ? JSON.parse(storagedState) : initialState
    },[user] )

    useEffect(()=>{
        console.log('로컬스토리지')
        localStorage.setItem(key,JSON.stringify(result))
    },[key,result])

    return result
}

export default usePersistedState