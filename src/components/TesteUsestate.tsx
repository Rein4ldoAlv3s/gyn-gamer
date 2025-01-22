import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { ChevronDownIcon, PencilIcon, Square2StackIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

const TesteUsestate = () => {

    return (
        // <div className='flex justify-between w-[800px] h-[400px] bg-blue-700 m-auto'>
        //     <h2 className='bg-yellow-500'>teste1</h2>
        //     <h2 className='bg-green-900 '>teste2</h2>
        //     <h2 className='bg-red-900'>teste3</h2>

        // </div>

        <div className="grid grid-cols-3 items-center w-full h-16 bg-gray-200">
            <div className="bg-blue-500 p-4">a1</div>
            <div className="bg-green-500 p-4 text-center">a2</div>
            <div className="bg-red-500 p-4 text-right">a3</div>
        </div>

    )
}


export default TesteUsestate