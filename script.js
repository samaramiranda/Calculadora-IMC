function calcular() {

  let altura = Number(document.getElementById("falt").value)
  let peso = Number(document.getElementById("fpeso").value)
  let resul = document.getElementById("resultado")

  resul.innerHTML = ""

  let imc = peso / (altura ** 2)

  if (imc <= 18.5) {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Peso baixo`
    resul.style.background = "#ffff00"
  } else if (imc <= 24.9) {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Peso normal`
    resul.style.background = "#2cb62c"
    console.log("normal")
  } else if (imc <= 29.9) {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Sobrepeso`
    resul.style.background = "#FFDAB9"
    console.log("acim")
  } else if (imc <= 34.9) {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Obesidade (I)`
    resul.style.background = "#FFA500"
  } else if (imc <= 39.9) {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Obesidade Severa (II)`
    resul.style.background = "#FF6347"
  } else {
    resul.innerHTML = `<strong>Resultado</strong> <br>Seu IMC é: ${imc.toFixed(2)} <br>Classificação: Obesidade Mórbida (III)`
    resul.style.background = "#FF0000"
  }
}