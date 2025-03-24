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
            <div className="flex gap-10">
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="html">
                        <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="html" />
                        <span className="absolute bg-blue-500 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="html">HTML</label>
                </div>

                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer" htmlFor="react">
                        <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="react" checked />
                        <span className="absolute bg-blue-500 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="react">React</label>
                </div>
            </div>
        </div>

    )
}


export default TesteUsestate