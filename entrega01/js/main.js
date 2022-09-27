/*  entrega1: Logistics simulator, el objetivo de esta primera entrega es que el usuario ingrese un código postal (CP) y
reciba un SLA de entrega para su pedido, utilizando ciclos y condicionales dentro de una funcion.

Como evolutivo de este simualador apruntaré a que se puedan consultar objetos con datos de logística (desde una API), desde donde se obtengan diferentes métodos de entrega disponibles para el CP ingresado y que se evalúe el/los mejor/es SLAs de entrega disponible.
*/

let deliveryOptions = [
    {
        name: 'entrega0',
        description: 'Entrega a Domicilio',
        availableSla: '2 días hábiles',
        
    },
    {
        name: 'entrega1',
        description: 'Retiro en local',
        availableSla: '1 días hábiles',
        
    },
    {
        name: 'entrega2',
        description: 'Retiro en Correo',
        availableSla: '5 días hábiles',
        
    }
    
]

let ingresarCp = parseInt(prompt('Ingresa tu código postal'));
const metodoEntrega = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        if (ingresarCp >= 1000 && ingresarCp <= 1500) {
        return document.write('tu pedido será entregado en ' + array[0].availableSla)
      } else if (ingresarCp >= 1501 && ingresarCp <= 2500) {
        return document.write('tu pedido será entregado en ' + array[1].availableSla)
      } else if (ingresarCp >= 2501 && ingresarCp <= 5000) {
        return document.write('tu pedido será entregado en ' + array[2].availableSla)
      } else { 
        return document.write('No llegamos a entregar en tu zona');
      }
    }
}
metodoEntrega(deliveryOptions);


