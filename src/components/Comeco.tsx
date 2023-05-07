import './Comeco.css'
import hilbert from '../assets/images/sprite_hilbert.png'

export default function Comeco() {


    return(
        <main>
            
            <img src={hilbert} alt="PokeTrainer Hilbert" />

            <h2>Está pronto para essa aventura?</h2>
            <p>Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!</p>

            <button className='btn'>Vamos Começar!</button>
        
        </main>
    )
}