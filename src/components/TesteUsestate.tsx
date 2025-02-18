import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { ChevronDownIcon, PencilIcon, Square2StackIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TesteUsestate = () => {

    return (
        // <div className='flex justify-between w-[800px] h-[400px] bg-blue-700 m-auto'>
        //     <h2 className='bg-yellow-500'>teste1</h2>
        //     <h2 className='bg-green-900 '>teste2</h2>
        //     <h2 className='bg-red-900'>teste3</h2>

        // </div>

        // <div className="grid gap-3 grid-cols-[1fr_auto_1fr]">
        //     <div className="bg-blue-500 text-white p-3">Item 1</div>
        //     <div className="bg-blue-500 text-white p-3">Item 2</div>
        //     <div className="bg-blue-500 text-white p-3">Item 3</div>
        //     <div className="bg-blue-500 text-white p-3">Item 4</div>
        //     <div className="bg-blue-500 text-white p-3">Item 5</div>
        //     <div className="bg-blue-500 text-white p-3">Item 6</div>
        //     <div className="bg-blue-500 text-white p-3">Item 7</div>
        //     <div className="bg-blue-500 text-white p-3">Item 8</div>
        //     <div className="bg-blue-500 text-white p-3">Item 9</div>
        // </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div className="bg-blue-500 text-white p-4">Item 1</div>
            <div className="bg-blue-500 text-white p-4">Item 2</div>
            <div className="bg-blue-500 text-white p-4">Item 3</div>
            <div className="bg-blue-500 text-white p-4">Item 4</div>
            <Link to={"/ddddd"}>
                Teste
            </Link>
        </div>




    )
}


export default TesteUsestate