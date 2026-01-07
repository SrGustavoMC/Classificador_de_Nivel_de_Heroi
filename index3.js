class herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === 'mago') {
            ataque = 'magia'
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada'
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais'
        } else if (this.tipo === 'ninja') {
            ataque = 'shurikens'
        }

        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}`
    }
}

const heroi1 = new herois('Gandalf', 19, 'mago')
console.log(heroi1.atacar())