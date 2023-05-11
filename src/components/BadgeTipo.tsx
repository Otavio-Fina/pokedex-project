import './BadgeTipo.css'
import Vetor from "../assets/tipos/Vector.png"
import Vetor1 from "../assets/tipos/Vector-1.png"
import Vetor2 from "../assets/tipos/Vector-2.png"
import Vetor3 from "../assets/tipos/Vector-3.png"
import Vetor4 from "../assets/tipos/Vector-4.png"
import Vetor5 from "../assets/tipos/Vector-5.png"
import Vetor10 from "../assets/tipos/Vector-10.png"
import Vetor12 from "../assets/tipos/Vector-12.png"
import Vetor13 from "../assets/tipos/Vector-13.png"
import Vetor14 from "../assets/tipos/Vector-14.png"
import Vetor15 from "../assets/tipos/Vector-15.png"
import Vetor16 from "../assets/tipos/Vector-16.png"
import Vetor17 from "../assets/tipos/Vector-17.png"
import Vetor18 from "../assets/tipos/Vector-18.png"
import Vetor19 from "../assets/tipos/Vector-19.png"
import Vetor20 from "../assets/tipos/Vector-20.png"
import Vetor21 from "../assets/tipos/Vector-21.png"
import Vetor22 from "../assets/tipos/Vector-22.png"


export default function BadgeTipo(props: any) {

    const preto = "#000000"
    const branco = "#FFFFFF"

    const agua = {bgColor: "#5090D6", font: preto, url: Vetor, nome: "Água"}
    const dragao = {bgColor: "#0B6DC3", font: branco, url: Vetor1, nome: "Dragão"}
    const eletrico = {bgColor: "#F4D23C", font: preto, url: Vetor2, nome: "Elétrico"}
    const fada = {bgColor: "#EC8FE6", font: preto, url: Vetor3, nome: "Fada"}
    const fantasma = {bgColor: "#5269AD", font: branco, url: Vetor4, nome: "Fantasma"}
    const fogo = {bgColor: "#FF9D55", font: preto, url: Vetor5, nome: "Fogo"}
    const gelo = {bgColor: "#73CEC0", font: preto, url: Vetor10, nome: "Gelo"}
    const grama = {bgColor: "#63BC5A", font: preto, url: Vetor12, nome: "Grama"}
    const inseto = {bgColor: "#91C12F", font: preto, url: Vetor13, nome: "Inseto"}
    const lutador = {bgColor: "#CE416B", font: branco, url: Vetor14, nome: "Lutador"}
    const normal = {bgColor: "#919AA2", font: preto, url: Vetor15, nome: "Normal"}
    const noturno = {bgColor: "#5A5465", font: branco, url: Vetor16, nome: "Noturno"}
    const metal = {bgColor: "#5A8EA2", font: preto, url: Vetor17, nome: "Metal"}
    const pedra = {bgColor: "#C5B78C", font: preto, url: Vetor18, nome: "Pedra"}
    const psiquico = {bgColor: "#FA7179", font: preto, url: Vetor19, nome: "Psíquico"}
    const terrestre = {bgColor: "#D97845", font: preto, url: Vetor20, nome: "Terrestre"}
    const venenoso = {bgColor: "#B567CE", font: preto, url: Vetor21, nome: "Venenoso"}
    const voador = {bgColor: "#89AAE3", font: preto, url: Vetor22, nome: "Voador"}



    function TipoTemplate (props: any) {
        

        const stileBadge: React.CSSProperties = { backgroundColor: props["bg-color"]}
        const stileSpan: React.CSSProperties = { color: props.font}
        const stileTipo: React.CSSProperties = { backgroundImage: `url(${props.url})`}

        return (
            <div className={`badge-tipo${props.tipo}` } style={stileBadge}>
                <div className="fundo-branco-badge"><div className={`tipo${props.tipo}`} style={stileTipo}></div></div>
                <span className='tipo-nome' style={stileSpan}>{props.nomeTipo}</span>
            </div>
        )
    }


    switch (props.tipo) {
        case 0: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={agua.bgColor} font={agua.font} url={agua.url} nomeTipo={agua.nome}/>
        );
        case 1: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={dragao.bgColor} font={dragao.font} url={dragao.url} nomeTipo={dragao.nome}/>
        );
        case 2: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={eletrico.bgColor} font={eletrico.font} url={eletrico.url} nomeTipo={eletrico.nome}/>
        );
        case 3: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={fada.bgColor} font={fada.font} url={fada.url} nomeTipo={fada.nome}/>
        );
        case 4: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={fantasma.bgColor} font={fantasma.font} url={fantasma.url} nomeTipo={fantasma.nome}/>
        );
        case 5: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={fogo.bgColor} font={fogo.font} url={fogo.url} nomeTipo={fogo.nome}/>
        );
        case 6: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={gelo.bgColor} font={gelo.font} url={gelo.url} nomeTipo={gelo.nome}/>
        );
        case 7: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={grama.bgColor} font={grama.font} url={grama.url} nomeTipo={grama.nome}/>
        );
        case 8: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={inseto.bgColor} font={inseto.font} url={inseto.url} nomeTipo={inseto.nome}/>
        );
        case 9: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={lutador.bgColor} font={lutador.font} url={lutador.url} nomeTipo={lutador.nome}/>
        );
        case 10: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={normal.bgColor} font={normal.font} url={normal.url} nomeTipo={normal.nome}/>
        );
        case 11: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={noturno.bgColor} font={noturno.font} url={noturno.url} nomeTipo={noturno.nome}/>
        );
        case 12: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={metal.bgColor} font={metal.font} url={metal.url} nomeTipo={metal.nome}/>
        );
        case 13: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={pedra.bgColor} font={pedra.font} url={pedra.url} nomeTipo={pedra.nome}/>
        );
        case 14: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={psiquico.bgColor} font={psiquico.font} url={psiquico.url} nomeTipo={psiquico.nome}/>
        );
        case 15: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={terrestre.bgColor} font={terrestre.font} url={terrestre.url} nomeTipo={terrestre.nome}/>
        );
        case 16: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={venenoso.bgColor} font={venenoso.font} url={venenoso.url} nomeTipo={venenoso.nome}/>
        );
        case 17: 
        return (
            <TipoTemplate tipo={props.tipo} bg-color={voador.bgColor} font={voador.font} url={voador.url} nomeTipo={voador.nome}/>
        );
    }



    return null
}