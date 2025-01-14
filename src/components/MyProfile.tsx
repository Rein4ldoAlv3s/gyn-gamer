import React from 'react'

const MyProfile = () => {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">Welcome, User!</h1>
            <div>
                <h2>Endereços</h2>

                <div>
                    <h2>Cep</h2>
                    <span>74000-000</span>
                </div>

                <div>
                    <h2>Bairro</h2>
                    <span>74000-000</span>
                </div>

                <div>
                    <h2>Estado</h2>
                    <span>Goiás</span>
                </div>

                <div>
                    <h2>Cidade</h2>
                    <span>Goiânia</span>
                </div>

            </div>
        </div>
    )
}

export default MyProfile