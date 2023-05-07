import './App.css'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import usePonteiroSeguindo from './hook/UsePonteiroSeguindo'
import { useRef } from 'react'


function App() {

  const ref = useRef(null)
  const { x, y } = usePonteiroSeguindo(ref)

  return (
    <div id='app'>
      <Outlet />
      <motion.div
        ref={ref}
        id='pikachu-stalker'
        animate={{ x, y }}
        transition={{ type: "spring", restDelta: 0.001, damping: 50, stiffness:250}}
      >
      </motion.div>
    </div>
  )
}

export default App
