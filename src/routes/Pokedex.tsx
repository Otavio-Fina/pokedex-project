import './Pokedex.css'
import setaBaixo from '../assets/images/Path.png'
import RenderizacaoListaPokemonCard from '../components/RenderizacaoListaPokemonCard'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

import UseNomeDaRegiao from '../hook/UseNomeDaRegiao'





export default function Pokedex() {

    const numRegiao = useSelector((state: RootState) => state.data.regiao)





    return (
        <>
         <main id='pokedex'> {/* id sendo usado para evitar o mesclagem de css */}
            <nav className="navbar">
                <div id='div-voltar'>
                    <Link id='seta-voltar' to={"/regioes"}></Link> <p>{UseNomeDaRegiao(numRegiao)}</p>
                </div>

                <div className="container-fluid">
                    <form className="container-fluid d-flex">
                        <input id='input-search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>








            <div id='base-filtro'>
                <motion.div className="filtro"
                whileTap={{ scale: 0.95 }}
                >
                    Todos os Tipos <img src={setaBaixo} alt="seta para baixo" />
                </motion.div>
                <motion.div className="filtro"
                whileTap={{ scale: 0.95 }}
                >
                    Menor Número <img src={setaBaixo} alt="seta para baixo" />
                </motion.div>
            </div>


            <h5 id='recomendacao'>* brinque com o sprite do Pokemon que você mais gosta 😺 <br /> clique, segure, puxe e arraste</h5>



            <RenderizacaoListaPokemonCard />

        </main>

        </>
    )
}