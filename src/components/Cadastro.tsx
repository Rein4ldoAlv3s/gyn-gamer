import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'

const Cadastro = () => {

    const navigate = useNavigate();
    const [opcoes, setOpcoes] = useState();

    const autoCompleteChange = (selectedOption: any) => {
        if (selectedOption && selectedOption.id) {
            navigate("/produtos/" + selectedOption.id, { state: { id: selectedOption.id } })
        }
    };

    useEffect(() => {
        const opcoes: any = PRODUTOS.map(function (prod) {
            return { value: prod.name, label: prod.name, id: prod.id };
        })
        setOpcoes(opcoes);
    }, []);

    return (
        <div>
            <header className="flex justify-between ">
                {/* <a className='bg-white ' href="#">Minha Conta</a>
                <Select
                    options={opcoes}
                    placeholder="Pesquise aqui..."
                    isSearchable={true}
                    className="px-1 rounded-sm outline-none w-1/5"
                    openMenuOnClick={true}
                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                    isClearable={true}
                    onChange={(e: unknown) => autoCompleteChange(e)}
                /> */}
            </header>
        </div>
    )
}

export default Cadastro