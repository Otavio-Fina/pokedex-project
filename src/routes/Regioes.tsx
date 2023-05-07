import './Regioes.css'
import BtnRegioes from '../components/BtnRegioes'

export default function Regioes() {

    return(

        <>
         <main id='regioes'> {/* id sendo usado para evitar o mesclagem de css */}
            <BtnRegioes gen={1}><section><h6>Kanto</h6><p>1ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={2}><section><h6>Johto</h6><p>2ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={3}><section><h6>Hoenn</h6><p>3ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={4}><section><h6>Sinnoh</h6><p>4ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={5}><section><h6>Unova</h6><p>5ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={6}><section><h6>Kalos</h6><p>6ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={7}><section><h6>Alola</h6><p>7ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            <BtnRegioes gen={8}><section><h6>Galar</h6><p>8ª GERAÇÃO</p></section> <div className='starter-div'><div className='starter-icon1'></div><div className='starter-icon2'></div><div className='starter-icon3'></div></div></BtnRegioes>
            

        </main>

        </>


        
    )
}