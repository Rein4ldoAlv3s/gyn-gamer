import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Tooltip } from '@mui/material';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Select from "react-select";
import { toast } from 'react-toastify';
import { PRODUTOS } from '../constants';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import StorefrontIcon from '@mui/icons-material/Storefront';




const Navbar = () => {

  const navigate = useNavigate();
  const [opcoes, setOpcoes] = useState();
  const auth = useContext(AuthContext);

  const cart = useContext(CartContext);
  const [qtdProdutos, setQtdProdutos] = useState<any>();

  useEffect(() => {
    const opcoes: any = PRODUTOS.map(function (prod) {
      return { value: prod.name, label: prod.name, id: prod.id };
    })
    setOpcoes(opcoes);

  }, []);

  useEffect(() => {
    setQtdProdutos(cart?.qtdProduto);
  }, [cart]);

  const autoCompleteChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.id) {
      navigate("/produtos/" + selectedOption.id, { state: { id: selectedOption.id } })
    }
  };

  const signout = (e: any) => {
    e.preventDefault();

    toast.success("Usuário deslogado!");


    auth?.setAuth(false)
    localStorage.removeItem("idUser")
    localStorage.removeItem("nomeUsuario")
    localStorage.removeItem("token")


    console.log(auth);

    //atrasar redirecionamento
    setTimeout(() => {
      navigate("/")
    }, 1500); // Atraso de 2 segundos (2000 ms)
  }

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

  return (
    <div>
      <header className="grid lg:grid-cols-3 px-2 py-4 bg-black">
        <div>
          <Link to="/">
            <h1 className="text-red-600 font-bold text-2xl select-none">Gyn Gamer</h1>
          </Link>
        </div>

        <Select
          options={opcoes}
          placeholder="Pesquise aqui..."
          isSearchable={true}
          className="rounded-sm outline-none w-[32rem] text-black"
          openMenuOnClick={true}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          isClearable={true}
          onChange={(e: unknown) => autoCompleteChange(e)}
        />
        <div className='flex items-center justify-end'>
          <Link to={"/meus-pedidos"}>
            <Tooltip title="Pedidos">
              <IconButton sx={{ mr: '15px', width: 30, height: 30, }} >
                <StorefrontIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Link>
          <Link to={"/cart"}>
            <Tooltip title="Carrinho de Compras">
              <IconButton aria-label="shopping" sx={{ mr: '15px', width: 30, height: 30, }} >
                <ShoppingCartIcon fontSize="medium" />
                {/* <span>{qtdProdutos}</span> */}
                <CartBadge badgeContent={qtdProdutos} color="primary" />
              </IconButton>
            </Tooltip>
          </Link>
          <FaUserCircle size={30} className='mr-2 text-white ' />
          {/* <Link to="/login" className='text-white '>{nomeUsuario || "Entrar"}</Link> */}
          <Menu as="div" >
            <MenuButton className="text-white max-w-[160px] truncate ..." >
              {auth?.auth ? localStorage.getItem("nomeUsuario") : "Entrar"}
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
                        to="/cadastro-usuario"
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
                        to="/my-profile"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Meu Perfil
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
                        to="/meus-pedidos"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-black' : 'text-gray-700'}`}
                      >
                        Meus Pedidos
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