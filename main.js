function SistemaBancario(usuario, edad, id, saldo, moneda) {
  this.usuario = usuario;
  this.edad = edad;
  this.id = id;
  this.saldo = saldo;
  this.moneda = moneda;

  this.saludar = function () {
    return `Hola Soy ${this.usuario}`;
  };

  this.mostrarSaldo = function () {
    return `Tu Saldo es ${this.saldo} ${this.moneda}`;
  };

  this.depositarDinero = function () {
    let cantidadDeposito = parseFloat(
      prompt('Ingrese la cantidad a depositar')
    );
    if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
      alert('Tiene que agregar al menos $1');
    } else {
      this.saldo += cantidadDeposito;
      alert(
        `¡Depósito exitoso! Tu saldo actual es: ${this.saldo} ${this.moneda}`
      );
    }
  };

  this.retirarDinero = function () {
    let cantidadRetirar = parseFloat(prompt('Ingrese la cantidad a retirar'));
    if (cantidadRetirar > this.saldo) {
      alert(
        `Saldo insuficiente, tu saldo actual es: ${this.saldo} ${this.moneda}`
      );
    } else if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
      alert('Tiene que agregar al menos $1');
    } else {
      this.saldo -= cantidadRetirar;
      alert(
        `¡Retiro exitoso! Tu saldo actual es: ${this.saldo} ${this.moneda}`
      );
    }
  };

  this.mostrarUsuario = function () {
    return `Usuario: \nNombre: ${this.usuario} \nEdad: ${this.edad}`;
  };
}

const sistemabancario = new SistemaBancario(
  'Sanchez Flavio',
  28,
  39145973,
  10000,
  'Dolares'
);

while (true) {
  let opcion = prompt(
    'Ingrese una opción: \n1. Mostrar saldo \n2. Hacer depósito\n3. Hacer retiro\n4. Mostrar historial\n5. Mostrar usuario\n6. Salir'
  );

  if (opcion === '1') {
    alert(sistemabancario.mostrarSaldo());
  } else if (opcion === '2') {
    sistemabancario.depositarDinero();
  } else if (opcion === '3') {
    sistemabancario.retirarDinero();
  } else if (opcion === '4') {
    alert('No tiene historial por ahora');
  } else if (opcion === '5') {
    alert(sistemabancario.mostrarUsuario());
  } else if (opcion === '6') {
    if (confirm('¿Seguro quieres salir?')) {
      alert('Muchas gracias, vuelva pronto');
      break;
    }
  } else {
    alert('Opción inválida, ingrese una opción correcta');
  }
}
