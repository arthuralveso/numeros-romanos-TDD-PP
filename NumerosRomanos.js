class NumerosRomanos {
  constructor() {
    this.algarismoRomano = '';
    this.letrasSeparadas = [];
    this.valores = [];
    this.algarismosRomanosBasicos = [
      {
        letra : 'I',
        valor : 1
      },
      {
        letra : 'V',
        valor : 5
      },
      {
        letra : 'X',
        valor : 10
      },
      {
        letra : 'L',
        valor : 50
      },
      {
        letra : 'C',
        valor : 100
      },
      {
        letra : 'D',
        valor : 500
      },
      {
        letra : 'M',
        valor : 1000
      },
    ]

  }

  getNumero(){
    for (let index = 0; index < this.algarismoRomano.length; index++) {
      this.letrasSeparadas.push(this.algarismoRomano.toUpperCase().charAt(index));

    };
    if (this.letrasSeparadas.length >= 1) {
      for (let index = 0; index <= this.letrasSeparadas.length; index++) {
        for (let i = 0; i < this.algarismosRomanosBasicos.length; i++){
          if(this.letrasSeparadas[index] === this.algarismosRomanosBasicos[i].letra){
            this.valores.push(this.algarismosRomanosBasicos[i].valor);
          };
        };
      };
      for (let index = 0; index <= this.valores.length; index++){
        if(this.valores[index] < this.valores[index + 1]){
          this.valores[index] = -this.valores[index]
        };
      };
      let somaDosValores = this.valores.reduce((accumulator, currentValue) => accumulator + currentValue);
      this.letrasSeparadas = [];
      this.valores = [];
      return somaDosValores;
    } 
  };


  somadorDeLetras(algarismo){
    this.algarismoRomano = algarismo;

  };

  





  






    // getLetra(numero){
  //   for (let i = 0; i < this.algarismosRomanosBasicos.length; i++){
  //     if (numero === this.algarismosRomanosBasicos[i].valor){
  //       return this.algarismosRomanosBasicos[i].letra;
  //     };
  //   };
  // };








}

module.exports = NumerosRomanos;