import { PRODUTOS } from "../constants"

const Home = () => {
    return (
        <div>
            <h1 className="flex justify-center text-3xl font-bold text-customWhite">
                PRODUTOS NOVOS E LANÇAMENTOS
            </h1>
            <div>

                <div className="grid grid-cols-4 gap-4 py-5 ">
                    {PRODUTOS.map((prod, index) => (
                        <a key={index} href={`/produtos/${prod.id}`}>
                            <div className="flex justify-center flex-col items-center border-2 rounded-md border-gray-400 hover:scale-105 transition-transform duration-300" key={index}>
                                <div className="w-full h-60">
                                    <img src={prod.img} alt="Imagem 1" className="w-full h-full object-cover" />

                                </div>
                                <div className="p-2 text-center">
                                    <p className="pt-3 pb-1 text-center line-clamp-2 text-customWhite">{prod.name}</p>
                                    <p className="text-customWhite">R$ {prod.price}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Home