/* eslint no-unused-expressions: 0 */
/* global describe it */
'use strict'

import { expect } from 'chai'
import { hora, valorProjeto, formatarValor } from './index'

describe('Freela', () => {
  describe('Freela.hora()', () => {
    it('should exist the hora() method', () => {
      expect(hora).to.exist
    })

    it('should hora() value to be a number', () => {
      expect(hora()).to.be.a('number')
    })

    it('should hora() value not to be a string', () => {
      expect(hora()).not.to.be.a('string')
    })

    it('should hora() value to equal 0', () => {
      expect(hora()).to.equal(0)
    })

    it('should hora(1000, 3, 4) value not to be a string', () => {
      expect(hora(1000, 3, 4)).to.be.a('string')
    })

    it('should hora(`Lorem`, `Ipsum`, `Dolor`) value to equal 0', () => {
      expect(hora('Lorem', 'Ipsum', 'Dolor')).to.equal(0)
    })

    it('should hora({}, false, undefined) value to equal 0', () => {
      expect(hora({}, false, undefined)).to.equal(0)
    })

    it('should hora(2300, 3, 5) value to equal `153.33`', () => {
      expect(hora(2300, 3, 5)).to.equal(`153.33`)
    })

    it('should hora(3000, 4, 5) value to equal `150.00`', () => {
      expect(hora(3000, 4, 5)).to.equal(`150.00`)
    })

    it('should hora(`4000`, `5`, `8`) value to equal `100.00`', () => {
      expect(hora('4000', '5', '8')).to.equal(`100.00`)
    })
  })

  describe('Freela.valorProjeto()', () => {
    it('should exist the valorProjeto() method', () => {
      expect(valorProjeto).to.exist
    })

    it('should valorProjeto() value to be a number', () => {
      expect(valorProjeto()).to.be.a('number')
    })

    it('should valorProjeto() value not to be a string', () => {
      expect(valorProjeto()).not.to.be.a('string')
    })

    it('should valorProjeto() value to equal 0', () => {
      expect(valorProjeto()).to.equal(0)
    })

    it('should hora(50, 5, 10) value not to be a string', () => {
      expect(hora(50, 5, 10)).to.be.a('string')
    })

    it('should valorProjeto(`Lorem`, `Ipsum`, `Dolor`) value to equal 0', () => {
      expect(valorProjeto('Lorem', 'Ipsum', 'Dolor')).to.equal(0)
    })

    it('should valorProjeto([], undefined, NaN) value to equal 0', () => {
      expect(valorProjeto([], undefined, NaN)).to.equal(0)
    })

    it('should valorProjeto(50, 4, 10) value to equal 2000.00', () => {
      expect(valorProjeto(50, 4, 10)).to.equal(`2000.00`)
    })

    it('should valorProjeto(50, 5, 25) value to equal `6250.00`', () => {
      expect(valorProjeto(50, 5, 25)).to.equal(`6250.00`)
    })
  })

  describe('Freela.formatarValor()', () => {
    it('should exist the formatarValor() method', () => {
      expect(formatarValor).to.exist
    })

    it('should formatarValor() value to equal 0', () => {
      expect(formatarValor()).to.equal(0)
    })

    it('should formatarValor(false) value to equal 0', () => {
      expect(formatarValor(false)).to.equal(0)
    })

    it('should formatarValor(NaN) value to equal 0', () => {
      expect(formatarValor(NaN)).to.equal(0)
    })

    it('should formatarValor(`1.30`) value to equal `R$ 1,30`', () => {
      expect(formatarValor(`1.30`)).to.equal(`R$ 1,30`)
    })

    it('should formatarValor(50) value to equal `R$ 50,00`', () => {
      expect(formatarValor(50)).to.equal(`R$ 50,00`)
    })

    it('should formatarValor(12345678) value to equal `R$ 12.345.678,00`', () => {
      expect(formatarValor(12345678)).to.equal(`R$ 12.345.678,00`)
    })
  })
})
