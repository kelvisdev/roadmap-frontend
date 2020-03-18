function Pessoa() {
    this.idade = 0

    setInterval(() => { // com arrow function o this sempre será o do escopo
        this.idade++
        console.log(this.idade);        
    }, 1000)
}

new Pessoa