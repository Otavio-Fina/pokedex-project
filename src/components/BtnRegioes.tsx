import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BtnRegioes(props: any) {


    return(
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5, stiffness: 400 }} 
                id={`btn-regiao-${props.gen}`}
                >
                {/*@ts-ignore*/}
                <Link className='link-regiao' to={'regioes'}>{props.children}</Link>
            </motion.div>   
    )
}