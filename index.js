let hero = "Aragorn"
let XP = 99500

switch (true) {
    case XP < 1000:
        console.log("O Herói de nome " + hero + " está no nível de Ferro")
        break;
    case XP >= 1001 && XP <= 2000:
        console.log("O Herói de nome " + hero + " está no nível Bronze")
        break;
    case XP >= 2001 && XP <= 5000:
        console.log("O Herói de nome " + hero + " está no nível Prata")
        break;
    case XP >= 5001 && XP <= 7000:
        console.log("O Herói de nome " + hero + " está no nível Ouro")
        break;
    case XP >= 7001 && XP <= 8000:
        console.log("O Herói de nome " + hero + " está no nível Platina")
        break;
    case XP >= 8001 && XP <= 9000:
        console.log("O Herói de nome " + hero + " está no nível Ascendente")
        break;
    case XP >= 9001 && XP <= 10000:
        console.log("O Herói de nome " + hero + " está no nível Imortal")
        break;
    default:
        console.log("O Herói de nome " + hero + " está no nível Radiante")
}

if (XP > 10000) { 
    console.log("O Herói de nome " + hero + " está no nível Radiante")
} else if (XP >= 9001 && XP <= 10000) {
    console.log("O Herói de nome " + hero + " está no nível Imortal")
} else if (XP >= 8001 && XP <= 9000) {
    console.log("O Herói de nome " + hero + " está no nível Ascendente")
} else if (XP >= 7001 && XP <= 8000) {
    console.log("O Herói de nome " + hero + " está no nível Platina")
} else if (XP >= 5001 && XP <= 7000) {
    console.log("O Herói de nome " + hero + " está no nível Ouro")
} else if (XP >= 2001 && XP <= 5000) {
    console.log("O Herói de nome " + hero + " está no nível Prata")
} else if (XP >= 1001 && XP <= 2000) {
    console.log("O Herói de nome " + hero + " está no nível Bronze")
} else {
    console.log("O Herói de nome " + hero + " está no nível de Ferro")
}