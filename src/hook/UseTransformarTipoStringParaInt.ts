export default function UseTransformarTipoStringParaInt(tipo: string) {
    switch(tipo){
        case "water":
            return 0;
        case "dragon":
            return 1;
        case "electric":
            return 2;
        case "fairy":
            return 3;
        case "ghost":
            return 4;
        case "fire":
            return 5;
        case "ice":
            return 6;
        case "grass":
            return 7;
        case "bug":
            return 8;
        case "fighting":
            return 9;
        case "normal":
            return 10;
        case "dark":
            return 11;
        case "steel":
            return 12;
        case "rock":
            return 13;
        case "psychic":
            return 14;
        case "ground":
            return 15;
        case "poison":
            return 16;
        case "flying":
            return 17;
        default:
            return 0;
    }
}