function calcularIMC() {

  // Pegando valores do input
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;

  // valida se os campos não estão vazios
  if (peso == '' || altura == '') {
    window.alert('Por favor, preencha os campos!')
  }

  // calcula IMC
  var resultado = (peso / (altura * altura));
  var message = '';

  // Mensagens de resultado
  if (resultado < 17) {
    message = 'Você está muito abaixo do peso';
  } else if (resultado >= 17 && resultado <= 18.49) {
    message = 'Você está abaixo do peso';
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    message = 'Seu peso está normal';
  } else if (resultado >= 25 && resultado <= 29.99) {
    message = 'Você está acima do peso';
  } else if (resultado >= 30 && resultado <= 34.99) {
    message = 'Você tem obesidade nível I';
  } else if (resultado >= 35 && resultado <= 39.99) {
    message = 'Você tem Obesidade nível II';
  } else if (resultado >= 40) {
    message = 'Você tem Obesidade nível III';
  }

  // mostra resultado
  resultado = resultado.toFixed(2);
  document.getElementById("message").innerHTML = 'Seu IMC é : ' + resultado + '<br>' + message;
}