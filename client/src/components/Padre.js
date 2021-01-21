import React, { useState } from 'react'
import Hijo1 from './Hijo1'
import Hijo2 from './Hijo2'

const Padre = () => {
    const [value, setValue] = useState('')

    const handlerFunction = (text) => {
        if(text)
            text += ' sarasa'

        setValue(text)
    }
    return (
        <div>
            Hola
            <Hijo1 setValue={handlerFunction} />

            <Hijo2 state={value} />
        </div>
    )
}

export default Padre