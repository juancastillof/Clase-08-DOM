let nombreUser = prompt("Ingresa tu nombre.");
const tasaAnual = 45.5;
let tasaMensual = tasaAnual / 12 / 100;
let capital;
let cantidadDeMeses;
let resultadoOperacion;
let interesesObtenidos;
let mesVencimiento;
let resultado;

let opcion = parseInt(prompt(`Hola! ${nombreUser}\n¿Qué te gustaría elegir?\n1 - Ver Tasa nomial anual vigente.\n2 - Entrar al simulador de plazo fijo.\n3 - Entrar al simulador de plazo fijo con interes compuesto.\n4 - ¿Qué es el interes compuesto?\n\nPara elegir una opción escribir su número.`));

// Funciones

const multiplicacion = (a,b) => a * b;
const suma = (a,b) => a + b;
const interesElevado = (a,b) => a ** b;

// Arrays

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let hoy = new Date();
let mesActual = meses[hoy.getMonth()];

// Regsitro de datos ingresados por array

const registro = [];   

function recargarNavegador() {
    window.location.reload();
  }

// DOM

function saludoMomento(){

    hora = hoy.getHours();
  
    if(hora >= 7 && hora < 12){
      saludoHora = "Buenos Días";
    }
  
    if(hora >= 12 && hora < 18){
      saludoHora = "Buenas Tardes";
    }
  
    if(hora >= 18 && hora < 24){
      saludoHora = "Buenas Noches";
    }

    if(hora >= 0 && hora < 7){
        saludoHora = "Buenas Noches";
      }

    let saludoInicial = document.getElementById("saludoInicial");
    saludoInicial.innerHTML =`<h2>Hola <strong>${nombreUser}</strong>, ${saludoHora}!!</h2>`;   
  }
  

while (opcion < 0 && opcion > 5);{
        switch (opcion) {
            case 1:
                opcion = 1;

                let resultado1 = document.getElementById("resultado");
                resultado1.innerHTML =`<h4>Ingresaste ver TNA actual</h4></br>
                                    <p>La TNA vigete del mes ${mesActual} es <strong>${tasaAnual}%</strong></p>`;

                registro.push (nombreUser, opcion);
                console.log(registro);

                break;

            case 2:
                opcion = 2;

                capital = parseInt(prompt("Ingresa el capital."));
                cantidadDeMeses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));
            
                resultadoOperacion = multiplicacion(capital,suma(1,multiplicacion(tasaMensual,cantidadDeMeses)));
                interesesObtenidos = resultadoOperacion - capital;

                mesVencimiento = hoy.setMonth(hoy.getMonth() + cantidadDeMeses)

                registro.push (nombreUser, opcion, capital, cantidadDeMeses, interesesObtenidos);
                console.log(registro);

                let resultado2 = document.getElementById("resultado");
                resultado2.innerHTML =`<h4>Ingresaste al <strong>Plazo Fijo Tradicional</strong></h4></br>
                <p>La TNA vigete del mes ${mesActual} es ${tasaAnual}%</p>
                <p>Ingresaste de capital: <strong>$${capital}</strong></p>
                <p>Con una TNA <strong>${tasaAnual}%</strong></p>
                <p>A ${cantidadDeMeses} meses</p>
                <p>El capital obtenido en ese tiempo es <strong>$${resultadoOperacion}</strong></p>
                <p>La fecha de vencimiento es el <strong>${hoy.getDate()}/${(hoy.getMonth()+1)}/${hoy.getFullYear()}</strong></p>
                <p>Los intereses obtenidos en esos ${cantidadDeMeses} meses es de <strong>$${interesesObtenidos}</strong></p>`;
            
                break;

            case 3:
                opcion = 3;

                capital = parseInt(prompt("Ingresa el capital."));
                cantidadDeMeses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));

                resultadoOperacion = multiplicacion(capital,interesElevado(suma(1,tasaMensual),cantidadDeMeses));
                interesesObtenidos = resultadoOperacion - capital;

                mesVencimiento = hoy.setMonth(hoy.getMonth() + cantidadDeMeses)

                let resultado3 = document.getElementById("resultado");
                resultado3.innerHTML =`<h4>Ingresaste al <strong>Plazo Fijo con interés compuesto</strong></h4></br>
                        <p>La TNA vigete del mes ${mesActual} es ${tasaAnual}%</p>
                        <p>Ingresaste de capital: <strong>$${capital}</strong></p>
                        <p>Con una TNA <strong>${tasaAnual}%</strong></p>
                        <p>A ${cantidadDeMeses} meses</p>
                        <p>El capital obtenido en ese tiempo es <strong>$${resultadoOperacion}</strong></p>
                        <p>La fecha de vencimiento es el <strong>${hoy.getDate()}/${(hoy.getMonth()+1)}/${hoy.getFullYear()}</strong></p>
                        <p>Los intereses obtenidos en esos ${cantidadDeMeses} meses es de <strong>$${interesesObtenidos}</strong></p>`;
                    

                registro.push (nombreUser, opcion, capital, cantidadDeMeses, interesesObtenidos);
                console.log(registro);
            
                break;

            case 4:
                opcion = 4;

                let resultado4 = document.getElementById("resultado");
                resultado4.innerHTML =`<h4>El interés compuesto es aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses.</h4>`;

                registro.push (nombreUser, opcion);
                console.log(registro);
            
                break;

            case 5:
                opcion = 5;

                let resultado5 = document.getElementById("resultado");
                resultado5.innerHTML =`<h4>${nombreUser} nos vemos! :)</h4>`;

                registro.push (nombreUser, opcion);
                console.log(registro);
                
                break
            
            default:
                opcion > 5;

                opcion = parseInt(prompt(`Mmm... ${nombreUser} no ingresaste una opción correcta.\n¿Qué te gustaría elegir?\n1 - Ver Tasa nomial anual vigente.\n2 - Entrar al simulador de plazo fijo.\n3 - Entrar al simulador de plazo fijo con interes compuesto.\n4 - ¿Qué es el interes compuesto?\n \n5 - Para finalizar el simulador\nPara elegir una opción escribir su número.`)
                );
        }
}