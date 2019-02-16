const addText = (el, text)  => el.innerHTML = text

var app = new Vue({
  el: '[data-app]',
  data: {
    calValorHora: false,
    valorHora: 0,
    salarioMes: 1000,
    diasSemana: 4,
    horasDia: 6,
    valorProjeto: 0,
    pValorHora: 0,
    pDuracaoProjeto: 0,
    pHorasDia: 0,
  },
  mounted: function () {
    this.calcHora()
    this.calcProjeto()
  },
  methods: {
    formatarValor: function (valor) {
      return Freela.formatarValor(valor)
    },
    calcHora: function () {
      if (
        parseInt(this.salarioMes) <= 0 ||
        parseInt(this.diasSemana) <= 0 ||
        parseInt(this.horasDia) <= 0
      ) {
        return
      }

      this.valorHora = Freela.hora(this.salarioMes, this.diasSemana, this.horasDia)
    },
    calcProjeto: function () {
      if (
        parseInt(this.pValorHora) <= 0 ||
        parseInt(this.pDuracaoProjeto) <= 0 ||
        parseInt(this.pHorasDia) <= 0
      ) {
        return
      }

      this.valorProjeto = Freela.hora(this.pValorHora, this.pDuracaoProjeto, this.pHorasDia)
    }
  }
})
