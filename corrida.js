function calcular() {

  // Pegando valores do input
  var peso = document.getElementById('peso').value;
  var nome = document.getElementById('nome').value;
  var distancia = document.getElementById('distancia').value;
  var tempo = document.getElementById('tempo').value;

  // valida se os campos não estão vazios
  if (peso == '' || nome == '' || distancia == '' || tempo == '') {
    window.alert('Por favor, preencha os campos!')
  }

  // calculo de distancia
  let velocidadeMedia = (distancia / tempo).toFixed(2);
  let gastoCalorico = (velocidadeMedia * peso * 0.0175 * (tempo / 60)).toFixed(2);

  velocidadeMedia = Math.round(2);

  document.getElementById("message").innerHTML = `Olá ${nome}! Você percorreu ${distancia}km em ${tempo}horas. Sua velocidade média foi de ${velocidadeMedia}km/h, você teve um gasto calorico de ${gastoCalorico}`;
}
