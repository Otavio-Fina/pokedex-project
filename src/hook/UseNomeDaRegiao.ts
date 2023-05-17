// vem o numero da regiao e retorna o nome dela

export default function UseNomeDaRegiao(numRegiao : number) {
    switch (numRegiao) {
        case 1: 
        return "Kanto"
        case 2: 
        return "Johto"
        case 3: 
        return "Hoenn"
        case 4: 
        return "Sinnoh"
        case 5: 
        return "Unova"
        case 6: 
        return "Kalos"
        case 7: 
        return "Alola"
        case 8: 
        return "Galar"
    }
}