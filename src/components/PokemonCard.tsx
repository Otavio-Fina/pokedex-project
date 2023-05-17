import BadgeTipo from './BadgeTipo.tsx'
import './PokemonCard.css'
import spritesGen7 from '../assets/pokesprite-master/pokesprite-master/pokemon-gen7x/regular/index.ts'
import spritesGen8 from '../assets/pokesprite-master/pokesprite-master/pokemon-gen8/regular/index.ts'
import tipos from '../assets/tipos/index.ts'
import useAxiosGet from '../hook/UseAxiosGet'

import UseTransformarTipoStringParaInt from '../hook/UseTransformarTipoStringParaInt.ts'
import UseTransformarTipoStringParaVector from '../hook/UseTransformarTipoStringParaVector.ts'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard(props: any) {

    const refDrag = useRef(null)

    const [tipoNm, setTipoNm] = useState<any[]>([])

    const [pokemonTipoVetorCSS, setPokemonTipoVetorCSS] = useState<React.CSSProperties>({});


    //@ts-ignore
    useEffect(() => {
        async function getTipo() {

            const atualTipo = await useAxiosGet(`https://pokeapi.co/api/v2/pokemon/${props.numPkm}/`)

            setTipoNm(atualTipo["types"])
        }
        getTipo()
        

        tipos.then((tipos: { [key: string]: string }) => {
          const PokemonTipoVetorCSS: React.CSSProperties = {

            backgroundImage: `url(${tipos[`${tipoTransformadoParaVectorECor[0]}`]})`
          };
    
          setPokemonTipoVetorCSS(PokemonTipoVetorCSS);
        });
      }, []);




      const tipo1TransformadoParaInt = tipoNm[0]?.type?.name ? UseTransformarTipoStringParaInt(tipoNm[0].type.name) : 0;
      const tipo2TransformadoParaInt = tipoNm[1]?.type?.name ? UseTransformarTipoStringParaInt(tipoNm[1].type.name) : 0;//@ts-ignore
      const tipoTransformadoParaVectorECor: string[] = tipoNm[0]?.type?.name ? UseTransformarTipoStringParaVector(tipoNm[0].type.name) : 0;
      
      const PokemonImgCSS: React.CSSProperties = { backgroundColor: `${tipoTransformadoParaVectorECor[1]}` }

      


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
                className='sprite'
                />
            )
        } else {
            return (
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={refDrag} 
                whileTap={{  scale: 1, rotate: 360 , transition: { rotate: { type: "spring", damping: 10 ,duration: 1 } }  }}
                whileHover={{ scale: 1.15 }}
                src={spritesGen8[props.nomePkm]}
                className='sprite'

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
                    <span className='poke-numero'>Nº {props.numPkm}</span>
                        <h5>{props.nomePkm.charAt(0).toUpperCase() + props.nomePkm.slice(1)}</h5>
                        <div id='tipo-container'>
                            <BadgeTipo tipo={tipo1TransformadoParaInt}/>
                            {tipoNm.length == 2 && <BadgeTipo tipo={tipo2TransformadoParaInt}/>}
                        </div>
                    </Link>

                    <div ref={refDrag} className='pokemon-img' style={ PokemonImgCSS } > 
                        <div className='pokemon-tipo-vetor' style={pokemonTipoVetorCSS}>
                            <Sprite />
                        </div>
                    </div>
                </motion.section>

    )
}