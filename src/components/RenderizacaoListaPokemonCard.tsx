import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'








export default function RenderizacaoListaPokemonCard() {
    const regiaoSelecionada = useSelector((state: RootState) => state.data.regiao)
    const pokedexAtual = useSelector((state: RootState) => state.data.pokedexAtual)
    console.log("🚀 ~ file: RenderizacaoListaPokemonCard.tsx:15 ~ RenderizacaoListaPokemonCard ~ pokedexAtual:", pokedexAtual[0]["pokemon_species"]["name"])
    const StrgBuscada = useSelector((state: RootState) => state.order.buscaNome)
    const ordemAtual = useSelector((state: RootState) => state.order.ordem)

    let listaDeCard1;

    function SliceParaTamanhoDaBusca(nomePkm: string) {
        const nomeCortado = nomePkm.slice(0, StrgBuscada.length)
        return nomeCortado
    }


    switch (regiaoSelecionada) {
        case 1:
            
            switch(ordemAtual) {
                case 'crescente':
                    
                    listaDeCard1 = pokedexAtual
                .filter((pokemon: any, index: number) =>SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  index <= 150)
                .map((pokemon: any, index: number) => {


                    return (
                        <PokemonCard 
                        genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                        
                    ) 

             });break; 

             case 'alfabetica':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  index <= 150)
            .sort((pokemonA: any, pokemonB: any) => {
                const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
                const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

         }) ;break; 
         case 'desalfabetica':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  index <= 150)
            .sort((pokemonA: any, pokemonB: any) => {
                const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
                const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            })
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

         }) ;break;

             

             default:
                listaDeCard1 = pokedexAtual
                .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  index <= 150)
                .map((pokemon: any, index: number) => {


                    return (
                        <PokemonCard 
                        genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                        
                    )

            });break;
            }
                return (
                <ul>
                    {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
                </ul>
            )





        case 2:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (151 <= index && index <= 250))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (151 <= index && index <= 250))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (151 <= index && index <= 250))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (151 <= index && index <= 250))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 3:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (251 <= index && index <= 385))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (251 <= index && index <= 385))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (251 <= index && index <= 385))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (251 <= index && index <= 385))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 4:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (386 <= index && index <= 493))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (386 <= index && index <= 493))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (386 <= index && index <= 493))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (386 <= index && index <= 493))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 5:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (494 <= index && index <= 648))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (494 <= index && index <= 648))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (494 <= index && index <= 648))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (494 <= index && index <= 648))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 6:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (649 <= index && index <= 720))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (649 <= index && index <= 720))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (649 <= index && index <= 720))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (649 <= index && index <= 720))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 7:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (721 <= index && index <= 808))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (721 <= index && index <= 808))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (721 <= index && index <= 808))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (721 <= index && index <= 808))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




        case 8:
            
        switch(ordemAtual) {
            case 'crescente':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (809 <= index && index <= 889))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={8}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                ) 

         });break; 

         case 'alfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (809 <= index && index <= 889))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={8}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break; 
     case 'desalfabetica':
            listaDeCard1 = pokedexAtual
        .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (809 <= index && index <= 889))
        .sort((pokemonA: any, pokemonB: any) => {
            const nameA = pokemonA["pokemon_species"]["name"].toUpperCase();
            const nameB = pokemonB["pokemon_species"]["name"].toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
        .map((pokemon: any, index: number) => {


            return (
                <PokemonCard 
                genSprite={8}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                
            )

     }) ;break;

         

         default:
            listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => SliceParaTamanhoDaBusca(pokemon["pokemon_species"]["name"]) == StrgBuscada &&  (809 <= index && index <= 889))
            .map((pokemon: any, index: number) => {


                return (
                    <PokemonCard 
                    genSprite={8}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    
                )

        });break;
        }
            return (
            <ul>
                {ordemAtual == 'decrescente' ? listaDeCard1.reverse() : listaDeCard1}
            </ul>
        )




    }

    return null


}