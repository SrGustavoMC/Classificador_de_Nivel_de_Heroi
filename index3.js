class herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar() {
        while (true) {
        if (this.tipo === 'mago') {
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando magia`
    } else if (this.tipo === 'guerreiro') {
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando espada`
    } else if (this.tipo === 'monge') {
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando artes marciais`
    } else if (this.tipo === 'ninja') {
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando shurikens`
    } else {
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando shurikens`
    }
        }    
            }
}
const heroi1 = new herois('Gandalf',19,'mago')
console.log(heroi1.atacar())