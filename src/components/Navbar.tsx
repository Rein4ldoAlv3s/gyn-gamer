import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'
import { FaFacebook, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

  const navigate = useNavigate();
  const [opcoes, setOpcoes] = useState();

  useEffect(() => {
    const opcoes: any = PRODUTOS.map(function (prod) {
      return { value: prod.name, label: prod.name, id: prod.id };
    })
    setOpcoes(opcoes);
  }, []);

  const autoCompleteChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.id) {
      navigate("/produtos/" + selectedOption.id, { state: { id: selectedOption.id } })
    }
  };

  return (
    <div>
      <header className="flex justify-between px-2 py-4 bg-black">
        <div>
          <a href="/">
            <h1 className="text-red-600 font-bold text-2xl select-none">Gyn Gamer</h1>
          </a>
        </div>

        <Select
          options={opcoes}
          placeholder="Pesquise aqui..."
          isSearchable={true}
          className="px-1 rounded-sm outline-none w-1/5 ml-auto"
          openMenuOnClick={true}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          isClearable={true}
          onChange={(e: unknown) => autoCompleteChange(e)}
        />
        <div className='flex items-center'>
          <FaUserCircle size={30} className='mr-2 text-white ' />
          <a href="" className='text-white '>Minha Conta</a>
        </div>

      </header >
      <header className="flex justify-center bg-black">
        <ul className='mb-3'>
          <li className="text-customWhite text-xl ">

            <Menu as="div" className=" relative inline-block text-left px-20">
              <a href="/" className="mr-4 hover:text-red-600">HOME</a>
              <a href="/promocoes" className="mr-4 hover:text-red-600">PROMOÇÕES</a>
              <a href="/pcgamer" className="mr-4 hover:text-red-600">PCS GAMERS</a>
              <a href="/notebooks" className="mr-4 hover:text-red-600">NOTEBOOKS</a>

              <MenuButton className="inline-flex justify-center items-center gap-x-2 hover:text-red-600  text-white  rounded-md focus:outline-none">
                HARDWARES
              </MenuButton>

              {/* Menu Items */}
              <MenuItems className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Mouses
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Teclados
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Placas-Mães
                      </a>
                    )}
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                        >
                          Processadores
                        </button>
                      )}
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>


          </li>
        </ul>
      </header>
      <header className="flex justify-center bg-black">

      </header>

    </div >
  )
}

export default Navbar