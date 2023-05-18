import './SelecaoDeOrdem.css'
import SelecaoDeOrdemTipoOuNumero from './SelecaoDeOrdemTipoOuNumero'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'



export default function SelecaoDeOrdem(props: any) {

    const abrirSelecao = useSelector((state: RootState) => state.order.abrirSelecao)

    const varianteAnimacaoMain = {
        abrir: { opacity: 1, x: 0 , display: "flex"},
        fechar: { opacity: 0, x: "-100%" , transitionEnd: { display: "none" } },
      }

    const varianteAnimacaoDiv = {
        abrir: { opacity: 1,  display: "flex"  },
        fechar: { opacity: 0 , transitionEnd: { display: "none" } },
    }

    return (
        <> 
        <motion.div id='selecao-escuro'
                    animate={ abrirSelecao? "abrir" : "fechar" }
                    transition={{ duration: 1 }}
                    variants={varianteAnimacaoDiv}  
                    initial={{ display: "none" }}      
                    >                                   {/* eu sei que 2 mains atrapalha a acessibilidade, quero reaproveitar o css dos mains  */}
            <motion.main id='SelecaoDeOrdem'  
            animate={ abrirSelecao? "abrir" : "fechar" }
            transition={{ duration: 1 }}
            variants={varianteAnimacaoMain}
            initial={{ display: "none" }}   
            >  
                <SelecaoDeOrdemTipoOuNumero selecionadoParaAbrir={props.aparecerTipoOuOrdem}/>
            </motion.main>
        </motion.div>
        </>
    )
}