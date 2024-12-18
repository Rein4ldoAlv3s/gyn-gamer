import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

  const navigate = useNavigate();
  const [opcoes, setOpcoes] = useState();
  //usestate logout
  const [nomeUsuario, setNomeUsuario] = useState<string | null>();
  const [tokenSessionStorage, setTokenSessionStorage] = useState<string | null>(() => sessionStorage.getItem("token"));


  useEffect(() => {
    const opcoes: any = PRODUTOS.map(function (prod) {
      return { value: prod.name, label: prod.name, id: prod.id };
    })
    setOpcoes(opcoes);

    if (tokenSessionStorage) {
      setNomeUsuario(sessionStorage.getItem("username"))
    }

    if (tokenSessionStorage === null) {
      sessionStorage.removeItem("username")
      sessionStorage.removeItem("token")
      navigate("/")
    }

  }, [tokenSessionStorage]);

  const autoCompleteChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.id) {
      navigate("/produtos/" + selectedOption.id, { state: { id: selectedOption.id } })
    }
  };

  const signout = (e: any) => {
    e.preventDefault();
    setTokenSessionStorage(null);
    setNomeUsuario("Entrar")
  }

  return (
    <div>
      <header className="flex justify-between px-2 py-4 bg-black">
        <div>
          <Link to="/">
            <h1 className="text-red-600 font-bold text-2xl select-none">Gyn Gamer</h1>
          </Link>
        </div>


        <Select
          options={opcoes}
          placeholder="Pesquise aqui..."
          isSearchable={true}
          className="px-1 rounded-sm outline-none w-1/2"
          openMenuOnClick={true}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          isClearable={true}
          onChange={(e: unknown) => autoCompleteChange(e)}
        />
        <div className='flex items-center'>
          <FaUserCircle size={30} className='mr-2 text-white ' />
          {/* <Link to="/minha-conta" className='text-white '>{nomeUsuario || "Entrar"}</Link> */}
          <Menu as="div" >
            <MenuButton className="text-white" >
              {nomeUsuario || "Entrar"}
            </MenuButton>
            <MenuItems modal={false} className="absolute text-white right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/minha-conta"
                      className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                    >
                      Meu Perfil
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={(e) => signout(e)}
                      className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                    >
                      Sair
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>

      </header >
      <header className="flex justify-center bg-black">
        <ul className='mb-3'>
          <li className="text-customWhite text-xl ">

            <Menu as="div" className=" relative inline-block text-left px-20">
              <Link to="/" className="mr-4 hover:text-red-600">HOME</Link>
              <Link to="/promocoes" className="mr-4 hover:text-red-600">PROMOÇÕES</Link>
              <Link to="/pcgamer" className="mr-4 hover:text-red-600">PCS GAMERS</Link>
              <Link to="/notebooks" className="mr-4 hover:text-red-600">NOTEBOOKS</Link>

              <MenuButton className="inline-flex justify-center items-center gap-x-2 hover:text-red-600  text-white  rounded-md focus:outline-none">
                HARDWARES
              </MenuButton>

              {/* Menu Items */}
              <MenuItems modal={false} className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10">
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

    </div >
  )
}

export default Navbar