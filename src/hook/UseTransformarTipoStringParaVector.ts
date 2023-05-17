export default function UseTransformarTipoStringParaVector(tipo: string) {
    switch(tipo){
        case "water":
            return ["VectorBranco" , "#5090D6"];
        case "dragon":
            return ["VectorBranco1" , "#0B6DC3"];
        case "electric":
            return ["VectorBranco2" , "#F4D23C"];
        case "fairy":
            return ["VectorBranco3" , "#EC8FE6"];
        case "ghost":
            return ["VectorBranco4" , "#5269AD"];
        case "fire":
            return ["VectorBranco5" , "#FF9D55"];
        case "ice":
            return ["VectorBranco10" , "#73CEC0"];
        case "grass":
            return ["VectorBranco12" , "#63BC5A"];
        case "bug":
            return ["VectorBranco13" , "#91C12F"];
        case "fighting":
            return ["VectorBranco14" , "#CE416B"];
        case "normal":
            return ["VectorBranco15" , "#919AA2"];
        case "dark":
            return ["VectorBranco16" , "#5A5465"];
        case "steel":
            return ["VectorBranco17" , "#5A8EA2"];
        case "rock":
            return ["VectorBranco18" , "#C5B78C"];
        case "psychic":
            return ["VectorBranco19" , "#FA7179"];
        case "ground":
            return ["VectorBranco20" , "#D97845"];
        case "poison":
            return ["VectorBranco21" , "#B567CE"];
        case "flying":
            return ["VectorBranco22" , "#89AAE3"];
        default:
            return ["VectorBranco" , "#5090D6"];
    }
}