import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Produto, PRODUTOS } from '../constants'
import { Navigate, useNavigate } from "react-router-dom";




const Promocoes = () => {

    const navigate = useNavigate();

    const [opcoes, setOpcoes] = useState();

    useEffect(() => {
        const opcoes: any = PRODUTOS.map(function (prod) {
            return { value: prod.name, label: prod.name };
        })
        console.log(opcoes);
        setOpcoes(opcoes);
    }, []);

    const redirecionar = () => {
        navigate(`/produtos/1`)
    };

    return (
        <div>
            <Select
                options={opcoes}
                placeholder="Pesquise aqui..."
                isSearchable={true}
                className="px-1 rounded-sm outline-none w-1/5"
                openMenuOnClick={false}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                isClearable={true}
            /> <br />

            <button className="bg-white" onClick={redirecionar}>CLique aqui</button>

        </div>
    );
}

export default Promocoes;
