import React from 'react'

const Hijo1 = ({ setValue }) => {
    return (
        <div>
            <input type="text" defaultValue='Hola Agus' onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default Hijo1