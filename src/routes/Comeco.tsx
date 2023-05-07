import './Comeco.css'
import hilbert from '../assets/images/sprite_hilbert.png'
import Balancer from 'react-wrap-balancer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Comeco() {


    return(

        <>
         <main>
            
            <img src={hilbert} alt="PokeTrainer Hilbert" />

            <section>
                <h2>Está pronto para essa aventura?</h2>
                    <p><Balancer>Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!</Balancer></p>
            </section>

            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5, stiffness: 400 }} 
                className='btn'
                >

                <Link id='link-comeco' to={'regioes'}>Vamos Começar!</Link>
            </motion.div>
            

        </main>





            <motion.div
                id='transicao-logo'
                animate={{ opacity: 0, transitionEnd: {display: "none" } }}
                layout
                transition={{ duration: 0.5, ease: "easeOut" , delay: 2.5}}
            >

            </motion.div>
        </>


        
    )
}