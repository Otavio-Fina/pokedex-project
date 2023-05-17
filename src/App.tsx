import './App.css'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import usePonteiroSeguindo from './hook/UsePonteiroSeguindo'
import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UseAxiosGet from './hook/UseAxiosGet'
import { getPokedexAtual } from './features/dataSlice'
import type { RootState } from './app/store'



function App() {

  const ref = useRef(null)
  const { x, y } = usePonteiroSeguindo(ref)

  const dispatch = useDispatch()


  useEffect(() => {
    async function pegandoPokedexAtual() {
      const pokedexAtual =  await UseAxiosGet(`https://pokeapi.co/api/v2/pokedex/1/`)

      dispatch(getPokedexAtual(pokedexAtual["pokemon_entries"]))

    }
    pegandoPokedexAtual()

  

  }, [dispatch])
  




  return (
    <div id='app'>
      <Outlet />
      <motion.div
        ref={ref}
        id='pikachu-stalker'
        animate={{ x, y }}
        transition={{ type: "spring", restDelta: 0.0001 , damping: 20, stiffness:250}}
      >
      </motion.div>
    </div>
  )
}

export default App
