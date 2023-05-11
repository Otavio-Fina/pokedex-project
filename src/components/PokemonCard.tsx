import BadgeTipo from './BadgeTipo.tsx'
import './PokemonCard.css'
import spritesGen7 from '../assets/pokesprite-master/pokesprite-master/pokemon-gen7x/regular/index.ts'
import spritesGen8 from '../assets/pokesprite-master/pokesprite-master/pokemon-gen8/regular/index.ts'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard(props: any) {

    const refDrag = useRef(null)

    const PokemonImgCSS: React.CSSProperties = { backgroundColor: `#333333` }

    const [clickado, setClickado] = useState(0)

    const handleOnClick = () => { 
        console.log("ativado")
        setClickado(clickado + 1)
    }

    if (clickado > 0) { //@ts-ignore
        document.getElementById('pikachu-stalker').style.backgroundImage = `url(${spritesGen7[props.nomePkm]})`
        console.log("executado")
    }

    const Sprite = () => {
        if (props.genSprite <= 7) {
            return (
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={refDrag} 
                whileTap={{ scale: 1, rotate: 360 , transition: { rotate: { type: "spring", damping: 10 ,duration: 1 } } }}
                whileHover={{ scale: 1.15 }}
                src={spritesGen7[props.nomePkm]}
                />
            )
        } else {
            return (
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={refDrag} 
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                src={spritesGen8[props.nomePkm]}
                />
            )
        }

    }





    return (
                <motion.section className="pokemon-card"
                whileHover={{ scale: 1.02 }}
                onClick={handleOnClick}
                >
                    <Link to={``} className="info-card">
                    <span className='poke-numero'>Nº 001</span>
                        <h5>PUKEMO</h5>
                        <div id='tipo-container'>
                            <BadgeTipo tipo={0}/>
                            <BadgeTipo tipo={9}/>
                        </div>
                    </Link>

                    <div ref={refDrag} className='pokemon-img' style={ PokemonImgCSS } > 
                        <Sprite />
                    </div>
                </motion.section>

    )
}