import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from 'react'

const useAction = (actions, deps) => {
    const dispatch = useDispatch()
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a=> bindActionCreators(a,dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        deps ? [dispatch, ...deps] : deps
    )
}
export default useAction