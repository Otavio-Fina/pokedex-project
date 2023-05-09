import BadgeTipo from './BadgeTipo.tsx'
import './PokemonCard.css'

export default function PokemonCard() {
    return (
        <section className="pokemon-card">
            <div className="info-card">
                <BadgeTipo tipo={0}/>
                <BadgeTipo tipo={13}/>
            </div>
        </section>
    )
}