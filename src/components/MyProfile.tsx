import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { HomeIcon } from '@heroicons/react/16/solid';
import { BiHome } from 'react-icons/bi';

const MyProfile = () => {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">Welcome, User!</h1>
            <h2 className='text-2xl font-bold'>Endereço de Entrega</h2>

            <div className='mt-2 flex w-1/2 justify-between py-3 px-2 bg-customGrayHover rounded-md text-sm'>

                <div>
                    <div>
                        <BiHome></BiHome>
                        <span>Reinaldo Alves</span>
                    </div>

                    <div className='mt-1'>
                        <span>Setor Pedro Ludovico, Rua 35</span>
                    </div>

                    <div>
                        <span>Goiânia-Goiás</span>
                    </div>



                    <div className='mt-1'>
                        <span>74000-000</span>
                    </div>

                    <div>
                        <span>(62) 99755-4481</span>
                    </div>

                    <div className='mt-1'>
                        <span>Ao lado do Bar do Leão</span>
                    </div>

                    <div>
                        <span>Endereço residencial </span>
                    </div>

                </div>
                <div>

                    <IconButton
                    >
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default MyProfile