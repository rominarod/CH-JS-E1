/*  entrega1: Logistics simulator, el objetivo de esta primera entrega es que el usuario ingrese un código postal (CP) y
reciba un SLA de entrega para su pedido, utilizando ciclos y condicionales dentro de una funcion.

Como evolutivo de este simualador apruntaré a que se puedan consultar objetos con datos de logística (desde una API), desde donde se obtengan diferentes métodos de entrega disponibles para el CP ingresado y que se evalúe el/los mejor/es SLAs de entrega disponible.
*/

let deliveryOptions = [
    {
        name: 'entrega1',
        description: 'Entrega a Domicilio',
        availableSla: '2 días hábiles',
        cp: 1500,
    },
    {
        name: 'entrega2',
        description: 'Retiro en local',
        availableSla: '1 días hábiles',
        cp: 2500,
    },
    {
        name: 'entrega3',
        description: 'Retiro en Correo',
        availableSla: '5 días hábiles',
        cp: 3000,
    }
    
]

let ingresarCp = parseInt(prompt('Ingresa tu código postal'));
const metodoEntrega = (array) => {
    let entrega = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].cp >= 1000 && array[i].cp <= 1500) {
        entrega.push(array[i])
      } else if (array[i].cp >= 1501 && array[i].cp <= 2500) {
        entrega.push(array[i])
      } else if (array[i].cp >= 2501 && array[i].cp <= 5000) {
        entrega.push(array[i])
      } else { 
        alert('No llegamos a entregar en tu zona');
      }
    }
    return entrega;
}
console.log(metodoEntrega(deliveryOptions));


// me falta resolver cómo retornar el método de entrega correspondiente a la condicion planteada en realación al cp ingresado :(