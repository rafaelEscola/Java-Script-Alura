document.querySelector(".titulo");)
			var titulo = document.querySelector(".titulo");
var paciente = document.query.Selector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContente;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");

console.log(imc);

tdImc.textContent = imc;
