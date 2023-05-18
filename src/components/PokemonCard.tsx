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
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'


export default function PokemonCard(props: any) {


    const [tipoNm, setTipoNm] = useState<any[]>([])

    const [idDoCard, setIdDoCard] = useState<any>()

    const [pokemonTipoVetorCSS, setPokemonTipoVetorCSS] = useState<React.CSSProperties>({});

    const [tipoASerFiltrado, setTipoASerFiltrado] = useState(0)
    const tipoASerFiltrado2 = useSelector((state: RootState) => state.order.filtro);

    useEffect(() => {
      setTipoASerFiltrado(tipoASerFiltrado2);
    }, [tipoASerFiltrado2]);


    //@ts-ignore
    useEffect(() => {
        const getTipo = async () => {

            const atualTipo = await useAxiosGet(`https://pokeapi.co/api/v2/pokemon/${props.numPkm}/`)

            setTipoNm(atualTipo["types"])
            setIdDoCard(atualTipo["id"])
           
            
        }
        getTipo()
        

        tipos.then((tipos: { [key: string]: string }) => {
            const tipoTransformadoParaVectorECor = tipoNm[0]?.type?.name ? UseTransformarTipoStringParaVector(tipoNm[0].type.name) : [];
            const PokemonTipoVetorCSS: React.CSSProperties = {
              backgroundImage: `url(${tipos[tipoTransformadoParaVectorECor[0]]})`
            };
    
          setPokemonTipoVetorCSS(PokemonTipoVetorCSS);
        });
      }, []);

      useEffect(() => {
        if (tipoNm.length > 0) {
            

            if (tipoASerFiltrado <= 17) {
                const tipo1 = UseTransformarTipoStringParaInt(tipoNm[0]?.type?.name);
                const tipo2 = UseTransformarTipoStringParaInt(tipoNm[1]?.type?.name);
        
                if (tipo2){
                    if (tipo1 !== tipoASerFiltrado && tipo2 !== tipoASerFiltrado) {
                        const pokemonCard = document.querySelector(`.pokemon-card${idDoCard}`) as HTMLElement;
                        if (pokemonCard) {
                          pokemonCard.style.display = "none";
                        }
                      } else {
                        const pokemonCard = document.querySelector(`.pokemon-card${idDoCard}`) as HTMLElement;
                        if (pokemonCard) {
                          pokemonCard.style.display = "flex";
                        }
                      }
                } else {
                    if (tipo1 !== tipoASerFiltrado) {
                        const pokemonCard = document.querySelector(`.pokemon-card${idDoCard}`) as HTMLElement;
                        if (pokemonCard) {
                          pokemonCard.style.display = "none";
                        }
                      } else {
                        const pokemonCard = document.querySelector(`.pokemon-card${idDoCard}`) as HTMLElement;
                        if (pokemonCard) {
                          pokemonCard.style.display = "flex";
                        }
                      }
                }
              } else {
                const pokemonCard = document.querySelector(`.pokemon-card${idDoCard}`) as HTMLElement;
                pokemonCard.style.display = "flex";
              }
        }
      

      }, [tipoNm, idDoCard, tipoASerFiltrado])

      
      




      const tipo1TransformadoParaInt = tipoNm[0]?.type?.name ? UseTransformarTipoStringParaInt(tipoNm[0].type.name) : 0;
      const tipo2TransformadoParaInt = tipoNm[1]?.type?.name ? UseTransformarTipoStringParaInt(tipoNm[1].type.name) : 0;//@ts-ignore
      const tipoTransformadoParaVectorECor: string[] = tipoNm[0]?.type?.name ? UseTransformarTipoStringParaVector(tipoNm[0].type.name) : [];
      
      const PokemonImgCSS: React.CSSProperties = { backgroundColor: `${tipoTransformadoParaVectorECor[1]}` }

      


    const [clickado, setClickado] = useState(0)

    const handleOnClick = () => { 
        setClickado(clickado + 1)
    }

    if (clickado > 0) {

        if (props.genSprite <= 7) { //@ts-ignore
            document.getElementById('pikachu-stalker').style.backgroundImage = `url(${spritesGen7[props.nomePkm]})`
        } else {//@ts-ignore
            document.getElementById('pikachu-stalker').style.backgroundImage = `url(${spritesGen8[props.nomePkm]})`
        }
    }

    const Sprite = () => {
        if (props.genSprite <= 7) {
            return (
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}} dragElastic={0.4} 
                whileTap={{ scale: 1, rotate: 360 , transition: { rotate: { type: "spring", damping: 10 ,duration: 1 } } }}
                whileHover={{ scale: 1.15 }}
                src={spritesGen7[props.nomePkm]}
                className='sprite'
                />
            )
        } else {
            return (
                <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}} dragElastic={0.4}
                whileTap={{  scale: 1, rotate: 360 , transition: { rotate: { type: "spring", damping: 10 ,duration: 1 } }  }}
                whileHover={{ scale: 1.15 }}
                src={spritesGen8[props.nomePkm]}
                className='sprite'

                />
            )
        }

    }





    return (
                <motion.section className={`pokemon-card  pokemon-card${idDoCard}`}
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

                    <div className='pokemon-img' style={ PokemonImgCSS } > 
                        <div className='pokemon-tipo-vetor' style={pokemonTipoVetorCSS}>
                            <Sprite />
                        </div>
                    </div>
                </motion.section>

    )
}