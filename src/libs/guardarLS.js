const guardarLS = (numeroComponente, numeroVentana) => {
  const objeto = {
    numero_componente: numeroComponente,
    numero_ventana: numeroVentana
  }
  localStorage.setItem('componente', JSON.stringify(objeto))
}

module.exports = {
  guardarLS
}