import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { BiCart } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


const Navbar = () => {

  const navigate = useNavigate();
  const [opcoes, setOpcoes] = useState();
  const auth = useContext(AuthContext);

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

  const signout = (e: any) => {
    e.preventDefault();

    toast.success("Usuário deslogado!");


    auth?.setAuth(false)
    console.log(auth);

    //atrasar redirecionamento
    setTimeout(() => {
      navigate("/")
    }, 1500); // Atraso de 2 segundos (2000 ms)
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
          className="px-1 rounded-sm outline-none w-[32rem] text-black"
          openMenuOnClick={true}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          isClearable={true}
          onChange={(e: unknown) => autoCompleteChange(e)}
        />
        <div className='flex items-center w-40 justify-end'>
          <Link to={"/cart"}>
            <IconButton aria-label="shopping" sx={{ mr: '5px' }} >
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <FaUserCircle size={30} className='mr-2 text-white ' />
          {/* <Link to="/login" className='text-white '>{nomeUsuario || "Entrar"}</Link> */}
          <Menu as="div" >
            <MenuButton className="text-white" >
              {auth?.auth ? localStorage.getItem("username") : "Entrar"}
            </MenuButton>
            <MenuItems transition modal={false} className="absolute text-white right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
              <div className="py-1">
                {!auth?.auth &&
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/login"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Acesse sua Conta
                      </Link>
                    )}
                  </MenuItem>
                }

                {!auth?.auth &&
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/cadastro"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Criar Conta
                      </Link>
                    )}
                  </MenuItem>
                }

                {auth?.auth &&
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/cart"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Carrinho de Compra
                      </Link>
                    )}
                  </MenuItem>
                }

                {auth?.auth &&
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="#"
                        onClick={(e) => signout(e)}
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Sair
                      </Link>
                    )}
                  </MenuItem>
                }
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
              <MenuItems transition modal={false} anchor="bottom start" className="absolute text-white right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1  ring-black ring-opacity-5 z-10 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
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
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Processadores
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
              <Link to="/rotasteste" className="ml-4 hover:text-red-600">ROTAS DE TESTE</Link>

            </Menu>


          </li>
        </ul>
      </header>

    </div >
  )
}

export default Navbar