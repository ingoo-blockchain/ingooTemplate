import {useState, useEffect} from 'react'

const useForm = (defaultValue,onSubmit,validate) => {
    const [values,setValues] = useState(defaultValue)
    const [submit,setSubmit] = useState(false)
    const [errors,setErrors] = useState({})

    const onChange = e => {
        const {name,value} = e.target
        setValues({ ...values,[name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
        setErrors(validate(values)) // validate 
    }

    useEffect(()=>{
        const init = async () => {
            if(submit){
                if(Object.keys(errors).length === 0){
                    onSubmit(values)
                }
                setSubmit(false)
            }
        }

        init()
    },[errors])

    return {
        ...Object.keys(defaultValue).reduce((acc,v)=>{
            acc[v] = {
                value:values[v],
                onChange
            }
            return acc
        },{}),
        handleSubmit,
        errors,
        submit
    }
}

export default useForm