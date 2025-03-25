import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { ChevronDownIcon, PencilIcon, Square2StackIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/16/solid'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PedidoContext } from '../contexts/PedidoContext'

const TesteUsestate = () => {

    const pedidoContext = useContext(PedidoContext);

    useEffect(() => {
        console.log(pedidoContext);
    }, [])


    return (
        <div>
            <div>
                <h1 className='text-white'>teste</h1>
            </div>
        </div>

    )
}


export default TesteUsestate