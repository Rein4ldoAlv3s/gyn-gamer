import React from 'react'

const MyProfile = () => {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">Welcome, User!</h1>
            <h2>Endereço</h2>

            <div className='flex'>

                <div>
                    <div>
                        <h2>Nome do destinatário</h2>
                        <span>Reinaldo Alves</span>
                    </div>

                    <div>
                        <h2>Cep</h2>
                        <span>74000-000</span>
                    </div>

                    <div>
                        <h2>Bairro</h2>
                        <span>Setor Pedro Ludovico</span>
                    </div>

                    <div>
                        <h2>Rua/Avenida</h2>
                        <span>Rua 36</span>
                    </div>

                </div>

                <div>
                    <div>
                        <h2>Estado</h2>
                        <span>Goiás</span>
                    </div>

                    <div>
                        <h2>Cidade</h2>
                        <span>Goiânia</span>
                    </div>

                    <div>
                        <h2>Telefone</h2>
                        <span>(62) 99755-4481</span>
                    </div>

                    <div>
                        <h2>Informações adicionais deste endereço (Opcional)</h2>
                        <span>Ao lado do Bar do Leão</span>
                    </div>

                    <div className='mt-3'>
                        <p>Este é o seu trabalho ou sua casa?</p>

                        <label>
                            <input type="radio" name="trabalho" value="trabalho" />
                            Trabalho
                        </label> <br />

                        <label>
                            <input type="radio" name="residencia" value="residencia" />
                            Residencia
                        </label> <br />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile