import './SelecaoDeOrdem.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import { abrirSelecao, nomeTipoSelecao , nomeOrdemSelecao , ordem , filtro } from '../features/orderSlice'






export default function SelecaoDeOrdemTipoOuNumero(props: any) {


    const dispatch = useDispatch()


    function handleOnClickOrdem(nome: string, ordenamento: string) {
        dispatch(nomeOrdemSelecao(nome));
        dispatch(ordem(ordenamento));
        dispatch(abrirSelecao(false));
        
    }

    function handleOnClickTipo(nome: string, tipo: number , tipoEscrito: string) {
        dispatch(nomeTipoSelecao(nome));//@ts-expect-error
        document.getElementById("filtro-tipo").className = `filtro btn-filtro-${tipoEscrito}`
        dispatch(filtro(tipo));
        dispatch(abrirSelecao(false));
        

    }


    switch (props.selecionadoParaAbrir) {
        case 'ordem':
            return (
                <>
                <div id='container-ordem'>
                    <h4>Selecione a ordem</h4>
                    <motion.div className="filtro"
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>  handleOnClickOrdem("Menor Número" , "crescente")}
                    >
                        Menor Número
                    </motion.div>
                    <motion.div className="filtro"
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>  handleOnClickOrdem("Maior Número" , "decrescente")}
                    >
                        Maior Número
                    </motion.div>
                    <motion.div className="filtro"
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>  handleOnClickOrdem("A - Z" , "alfabetica")}
                    >
                        A - Z
                    </motion.div>
                    <motion.div className="filtro"
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>  handleOnClickOrdem("Z - A" , "desalfabetica")}
                    >
                        Z - A
                    </motion.div>
                </div>
                
                </>
            )









        case 'tipo':
            return (
                    <>
                    <div id='container-ordem'>
                        <h4>Selecione o tipo</h4>
                        <motion.div className="filtro"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Todos os Tipos" , 100 , "")}
                        >
                            Todos os Tipos
                        </motion.div>
                        <motion.div className="filtro btn-filtro-agua"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Água" , 0  , "agua")}
                        >
                            Água
                        </motion.div>
                        <motion.div className="filtro btn-filtro-dragao"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Dragão" , 1  , "dragao")}
                        >
                            Dragão
                        </motion.div>
                        <motion.div className="filtro btn-filtro-eletrico"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Elétrico" , 2  , "eletrico")}
                        >
                            Elétrico
                        </motion.div>
                        <motion.div className="filtro btn-filtro- btn-filtro-fada"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Fada" , 3  , "fada")}
                        >
                            Fada
                        </motion.div>
                        <motion.div className="filtro btn-filtro-fantasma"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Fantasma" , 4  , "fantasma")}
                        >
                            Fantasma
                        </motion.div>
                        <motion.div className="filtro btn-filtro-fogo"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Fogo" , 5  , "fogo")}
                        >
                            Fogo
                        </motion.div>
                        <motion.div className="filtro btn-filtro-gelo"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Gelo" , 6  , "gelo")}
                        >
                            Gelo
                        </motion.div>
                        <motion.div className="filtro btn-filtro-grama"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Grama" , 7  , "grama")}
                        >
                           Grama
                        </motion.div>
                        <motion.div className="filtro btn-filtro-inseto"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Inseto" , 8  , "inseto")}
                        >
                            Inseto
                        </motion.div>
                        <motion.div className="filtro btn-filtro-lutador"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Lutador" , 9  , "lutador")}
                        >
                            Lutador
                        </motion.div>
                        <motion.div className="filtro btn-filtro-normal"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Normal" , 10  , "normal")}
                        >
                            Normal
                        </motion.div>
                        <motion.div className="filtro btn-filtro-noturno"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Noturno" , 11  , "noturno")}
                        >
                            Noturno
                        </motion.div>
                        <motion.div className="filtro btn-filtro-metal"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Metal" , 12  , "metal")}
                        >
                           Metal
                        </motion.div>
                        <motion.div className="filtro btn-filtro-pedra"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Pedra" , 13  , "pedra")}
                        >
                            Pedra
                        </motion.div>
                        <motion.div className="filtro btn-filtro-psiquico"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Psíquico" , 14  , "psiquico")}
                        >
                            Psíquico
                        </motion.div>
                        <motion.div className="filtro btn-filtro-terrestre"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Terrestre" , 15  , "terrestre")}
                        >
                            Terrestre
                        </motion.div>
                        <motion.div className="filtro btn-filtro-venenoso"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Venenoso" , 16  , "venenoso")}
                        >
                            Venenoso
                        </motion.div>
                        <motion.div className="filtro btn-filtro-voador"
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>  handleOnClickTipo("Voador" , 17  , "voador")}
                        >
                            Voador
                        </motion.div>
                    </div>
                    
                    </>
                )
    }
    




    return null
}