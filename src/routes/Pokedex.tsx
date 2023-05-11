import './Pokedex.css'
import setaBaixo from '../assets/images/Path.png'
import PokemonCard from '../components/PokemonCard'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



export default function Pokedex() {
    return (
        <>
         <main id='pokedex'> {/* id sendo usado para evitar o mesclagem de css */}
            <nav className="navbar">
                <div id='div-voltar'>
                    <Link id='seta-voltar' to={"/regioes"}></Link> <p>Kanto</p>
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


            <h5 id='recomendacao'>* brinque com o sprite do Pokemon que você mais gosta 😺</h5>



            <PokemonCard nomePkm={"bulbasaur"} genSprite={1} />
            <PokemonCard nomePkm={"torchic"} genSprite={3} />

        </main>

        </>
    )
}