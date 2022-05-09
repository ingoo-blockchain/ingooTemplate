import React from 'react'
import 'antd/dist/antd.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} /> 
        </>
    )
}

export default App