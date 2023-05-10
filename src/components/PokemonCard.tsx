import BadgeTipo from './BadgeTipo.tsx'
import './PokemonCard.css'
import exemploPoke from '../assets/pokesprite-master/pokesprite-master/pokemon-gen7x/regular/ditto.png'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function PokemonCard() {

    const refDrag = useRef(null)

    return (
        <section className="pokemon-card">
            <div className="info-card">
                <span className='poke-numero'>Nº 001</span>
                <h5>PUKEMO</h5>
                <div id='tipo-container'>
                    <BadgeTipo tipo={0}/>
                    <BadgeTipo tipo={13}/>
                </div>

            </div>

            <div ref={refDrag} className='pokemon-img'>
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} 
                dragConstraints={refDrag} 
                whileTap={{ scale: 0.85 }}
                src={exemploPoke}
                ></motion.img>
            </div>
        </section>
    )
}