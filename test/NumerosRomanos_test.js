const expect = require('chai').expect;
const NumerosRomanos = require('../NumerosRomanos');

describe('Algarismo romano para numero arabico', () => {
  describe('Algarismo romano com um unico caractere', () => {
    it('Deve retornar um numero correspondente a um algarismo romano de um unico caractere', () => {
      let r = new NumerosRomanos();
      r.somadorDeLetras('i');
      expect(r.getNumero()).to.equal(1);
    });
  });
  describe('Algarismo romano com caracteres repetidos', () => {
    it('Deve retornar a soma dos valores correspondentes aos algarismos romanos repeditos com tamanho limitado a 3 caracteres iguais', () => {
      let r = new NumerosRomanos();
      r.somadorDeLetras('iii');
      expect(r.getNumero()).to.equal(3);
      r.somadorDeLetras('xxx');
      expect(r.getNumero()).to.equal(30);
      r.somadorDeLetras('ccc');
      expect(r.getNumero()).to.equal(300);
      r.somadorDeLetras('mmm');
      expect(r.getNumero()).to.equal(3000);
    });
  });
  describe('Algarismo romanos com mais de um caractere e distintos', () => {
    it('Deve retornar a soma dos valores correspondentes aos algarismos romanos quando os caracteres "I", "X", "C" estiverem a direita de numerais maiores',
    () => {
      let r = new NumerosRomanos();
      r.somadorDeLetras('viii');
      expect(r.getNumero()).to.equal(8);
      r.somadorDeLetras('lxii');
      expect(r.getNumero()).to.equal(62);
      r.somadorDeLetras('clviii');
      expect(r.getNumero()).to.equal(158);
      r.somadorDeLetras('mcxx');
      expect(r.getNumero()).to.equal(1120);
    });
  });
  describe('Algarismo romanos com mais de um caractere e distintos', () => {
    it('Deve  a subtração dos valores correspondentes aos algarismos romanos quando os caracteres "I", "X", "C" estiverem a esquerda de numerais maiores',
    () => {
      let r = new NumerosRomanos();
      r.somadorDeLetras('iv');
      expect(r.getNumero()).to.equal(4);
      r.somadorDeLetras('ix');
      expect(r.getNumero()).to.equal(9);
      r.somadorDeLetras('xc');
      expect(r.getNumero()).to.equal(90);
    });
  });

});

