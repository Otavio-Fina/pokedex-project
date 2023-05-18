import './Pokedex.css'
import setaBaixo from '../assets/images/Path.png'
import RenderizacaoListaPokemonCard from '../components/RenderizacaoListaPokemonCard'
import SelecaoDeOrdem from '../components/SelecaoDeOrdem'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { abrirSelecao, buscaNome } from '../features/orderSlice'
import { useState } from 'react'

import UseNomeDaRegiao from '../hook/UseNomeDaRegiao'





export default function Pokedex() {

    const numRegiao = useSelector((state: RootState) => state.data.regiao)
    const nomeDoBtnOrdem = useSelector((state: RootState) => state.order.nomeOrdemSelecao)
    const nomeDoBtnTipo = useSelector((state: RootState) => state.order.nomeTipoSelecao)


    const dispatch = useDispatch()

    const [ aparecerTipoOuOrdem , setAparecerTipoOuOrdem ]= useState("ordem")


    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
          e.preventDefault();
          dispatch(buscaNome(e.currentTarget.value))

        }
      }



    return (
        <>
         <main id='pokedex'> {/* id sendo usado para evitar o mesclagem de css */}
            <nav className="navbar">
                <div id='div-voltar'>
                    <Link id='seta-voltar' to={"/regioes"}></Link> <p>{UseNomeDaRegiao(numRegiao)}</p>
                </div>

                <div className="container-fluid">
                    <form className="container-fluid d-flex">
                        <input id='input-search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onKeyDown={handleKeyDown} />
                    </form>
                </div>
            </nav>








            <div id='base-filtro'>
                <motion.div className="filtro" id='filtro-tipo'
                whileTap={{ scale: 0.95 }}
                onClick={() =>  {setAparecerTipoOuOrdem("tipo") ; dispatch(abrirSelecao(true))}}
                >
                    {nomeDoBtnTipo} <img src={setaBaixo} alt="seta para baixo" />
                </motion.div>
                <motion.div className="filtro" 
                whileTap={{ scale: 0.95 }}
                onClick={() =>  {setAparecerTipoOuOrdem("ordem") ; dispatch(abrirSelecao(true))}}
                >
                    {nomeDoBtnOrdem} <img src={setaBaixo} alt="seta para baixo" />
                </motion.div>
            </div>


            <h5 id='recomendacao'>* brinque com o sprite do Pokemon que você mais gosta 😺 <br /> clique, segure, puxe e arraste</h5>



            <RenderizacaoListaPokemonCard />

            
            <SelecaoDeOrdem aparecerTipoOuOrdem={aparecerTipoOuOrdem} />
        </main>





        </>
    )
}