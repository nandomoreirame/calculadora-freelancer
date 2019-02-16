'use strict'

const invalidos = (items = []) =>
  items.every(item =>
    (item === 0 || isNaN(item) || (typeof item !== 'number' && typeof item !== 'string')))

const Freela = {

  /*
   * @salarioMes ~> Quanto você quer ganhar por mês?
   * @diasSemana ~> Quantos dias você quer trabalhar por semana?
   * @horasDia ~> Quantas horas você quer trabalhar por dia?
   */
  hora: (salarioMes = 0, diasSemana = 0, horasDia = 0) => {
    if (invalidos([salarioMes, diasSemana, horasDia])) return 0
    return ((parseFloat(salarioMes) / parseFloat(diasSemana)) / parseFloat(horasDia)).toFixed(2)
  },

  /*
   * @valorHora ~> Quanto você ganha por hora?
   * @horasDia ~> Quantas horas irá trabalhar no projeto por dia?
   * @duracaoProjeto ~> Quantos dias irá durar o projeto?
   */
  valorProjeto: (valorHora = 0, horasDia = 0, duracaoProjeto = 0) => {
    if (invalidos([valorHora, horasDia, duracaoProjeto])) return 0
    return ((parseFloat(valorHora) * parseFloat(duracaoProjeto)) * parseFloat(horasDia)).toFixed(2)
  },

  /*
   * @valor ~> valor a ser formatado para real
   */
  formatarValor: (valor) => {
    if (invalidos([valor])) return 0
    if (typeof valor === 'string') valor = parseFloat(valor)
    let valorFormatado = valor.toFixed(2).split('.')
    valorFormatado[0] = `R$ ${valorFormatado[0].split(/(?=(?:...)*$)/).join('.')}`
    return valorFormatado.join(',')
  }
}

export default Freela
