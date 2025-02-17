import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useEffect } from 'react';

const EscolhaEnderecoEntrega = () => {

    useEffect(() => {

    }, [])


    return (
        <div>
            <h1 className="flex justify-start text-3xl font-bold text-customWhite ">
                Escolha a forma de entrega
            </h1>
            <div className='mt-2 flex w-1/2 justify-between bg-customGrayHover rounded-md text-sm'>

                <div className='py-3 pl-2'>
                    <div className='flex items-center'>
                        <FaHome size={20} className='mr-2 text-white ' />
                        <span>Reinaldo Alves</span>
                    </div>

                    <div className='mt-2'>
                        <span>Setor Pedro Ludovico, Rua 35</span>
                    </div>

                    <div>
                        <span>Goiânia-Goiás</span>
                    </div>



                    <div className='mt-2'>
                        <span>CEP 74000-000</span>
                    </div>

                    <div className='mt-2'>
                        <span>Ao lado do Bar do Leão</span>
                    </div>

                    <div>
                        <span>Endereço residencial </span>
                    </div>

                </div>
                <div>

                    <Menu as="div">
                        <MenuButton className="inline-flex justify-center items-center">
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
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
                                            Editar
                                        </a>
                                    )}
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>

            </div>
        </div>
    )
}

export default EscolhaEnderecoEntrega