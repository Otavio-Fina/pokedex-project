import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { useEffect } from 'react'






export default function RenderizacaoListaPokemonCard() {
    const regiaoSelecionada = useSelector((state: RootState) => state.data.regiao)
    const pokedexAtual = useSelector((state: RootState) => state.data.pokedexAtual)
    const ordemAtual = useSelector((state: RootState) => state.order.ordem)

    let listaDeCard1;



    switch (regiaoSelecionada) {
        case 1:
            
            switch(ordemAtual) {
                case 'crescente':
                    listaDeCard1 = pokedexAtual
                .filter((pokemon: any, index: number) => index <= 150)
                .map((pokemon: any, index: number) => {


                    return (
                        <PokemonCard 
                        genSprite={1}  key={( pokemon["entry_number"])} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                        
                    ) 

             });break; 

             case 'alfabetica':
                listaDeCard1 = pokedexAtual
            .filter((pokemon: any, index: number) => index <= 150)
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
            .filter((pokemon: any, index: number) => index <= 150)
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
                .filter((pokemon: any, index: number) => index <= 150)
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
            const listaDeCard2 = pokedexAtual
            .filter((pokemon: any, index: number) => 151 <= index && index <= 250)
            .map((pokemon: any, index: number) => {
                
                    return (
                        <PokemonCard 
                        genSprite={1}  key={pokemon["entry_number"]}  nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
            })
                return (
                <ul>
                    {listaDeCard2}
                </ul>
            )
        case 3:
            const listaDeCard3 = pokedexAtual
            .filter((pokemon: any, index: number) => 251 <= index && index <= 385)
            .map((pokemon: any, index: number) => {
                    return (
                        <PokemonCard 
                        genSprite={1}   key={pokemon["entry_number"]} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard3}
                </ul>
            )
        case 4:
            const listaDeCard4 = pokedexAtual
            .filter((pokemon: any, index: number) => 386 <= index && index <= 493)
            .map((pokemon: any, index: number) => {

                    return (
                        <PokemonCard 
                        genSprite={1}   key={pokemon["entry_number"]} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard4}
                </ul>
            )
        case 5:
            const listaDeCard5 = pokedexAtual
            .filter((pokemon: any, index: number) => 494 <= index && index <= 648)
            .map((pokemon: any, index: number) => {

                    return (
                        <PokemonCard 
                        genSprite={1}   key={pokemon["entry_number"]} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard5}
                </ul>
            )
        case 6:
            const listaDeCard6 = pokedexAtual
            .filter((pokemon: any, index: number) => 649 <= index && index <= 720)
            .map((pokemon: any, index: number) => {

                    return (
                        <PokemonCard 
                        genSprite={1}   key={pokemon["entry_number"]} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard6}
                </ul>
            )
        case 7:
            const listaDeCard7 = pokedexAtual
            .filter((pokemon: any, index: number) => 721 <= index && index <= 808)
            .map((pokemon: any, index: number) => {

                    return (
                        <PokemonCard 
                        genSprite={1} key={pokemon["entry_number"]} nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard7}
                </ul>
            )
        case 8:
            const listaDeCard8 = pokedexAtual
            .filter((pokemon: any, index: number) => 809 <= index && index <= 889)
            .map((pokemon: any, index: number) => {

                    return (
                        <PokemonCard 
                        genSprite={8}  key={pokemon["entry_number"]}  nomePkm={pokemon["pokemon_species"]["name"]} numPkm={pokemon["entry_number"]}/> 
                    )
                
            })
                return (
                <ul>
                    {listaDeCard8}
                </ul>
            )
    }

    return null


}