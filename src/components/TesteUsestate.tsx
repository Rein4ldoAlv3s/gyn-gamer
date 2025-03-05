import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { ChevronDownIcon, PencilIcon, Square2StackIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TesteUsestate = () => {

    return (
        <div>
            <form className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Escolha uma opção:</h2>

                <div className="flex items-center mb-2">
                    <input id="option1" name="options" type="radio" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="option1" className="ml-2 text-gray-700">Opção 1</label>
                </div>

                <div className="flex items-center mb-2">
                    <input id="option2" name="options" type="radio" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="option2" className="ml-2 text-gray-700">Opção 2</label>
                </div>

                <div className="flex items-center mb-2">
                    <input id="option3" name="options" type="radio" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="option3" className="ml-2 text-gray-700">Opção 3</label>
                </div>

                <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Enviar</button>
            </form>
        </div>

    )
}


export default TesteUsestate