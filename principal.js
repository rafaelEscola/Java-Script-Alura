document.querySelector(".titulo");)
			var titulo = document.querySelector(".titulo");
var paciente = document.query.Selector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContente;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
z
if(peso < 0 > 1000){
    console.log("Peso inválido);	
}	

if(altura < 0){
    console.log("Peso inválido);	
}		

console.log(imc);

tdImc.textContent = imc;
