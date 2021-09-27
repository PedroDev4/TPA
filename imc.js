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
    message = 'Você está muito abaixo do peso, Procure manter seu peso acima de 45 kg';
  } else if (resultado >= 17 && resultado <= 18.49) {
    message = 'Você está abaixo do peso, Procure manter seu peso entre 50 à 56Kg';
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    message = 'Seu peso está normal, Procure manter seu peso entre 56 a 67 à 29Kg';
  } else if (resultado >= 25 && resultado <= 29.99) {
    message = 'Você está acima do peso. Procure manter seu peso entre 65 à 75Kg';
  } else if (resultado >= 30 && resultado <= 34.99) {
    message = 'Você tem obesidade nível I, Procure manter seu peso entre 73 à 82Kg';
  } else if (resultado >= 35 && resultado <= 39.99) {
    message = 'Você tem Obesidade nível, Procure manter seu peso entre 80 à 86Kg';
  } else if (resultado >= 40) {
    message = 'Você tem Obesidade nível III, Procure manter seu peso entre 83 à 90Kg';
  }

  // mostra resultado
  resultado = resultado.toFixed(2);
  document.getElementById("message").innerHTML = 'Seu IMC é : ' + resultado + '<br>' + message;
}