import React, { useState } from 'react'

const TesteUsestate = () => {



    return (
        <div>
            <h1 className='text-white'>componente 1</h1>
            <Comp2 />
        </div>
    )
}

const Comp2 = () => {



    const setValue = () => {
        sessionStorage.setItem("nome", "Reinaldo")
    }

    return (
        <div>
            <h1 className='text-white'>componente 2</h1>
            <button className='mt-5 text-white bg-black' onClick={setValue}>Alterar nome variavel</button>
        </div>
    )

}


export default TesteUsestate