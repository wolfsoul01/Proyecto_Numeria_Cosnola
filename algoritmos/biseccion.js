//const math = require("mathjs");
//const colors = require("colors");
//const Table = require("cli-table");
import * as math from "mathjs";
import colors from "colors";
import Table from "cli-table";

// variables globales para organizar
const euler = 2.7182818284590452353602874713527; // esta madre es euler  :(
const pi = 3.1415926535897932384626433832795;

//  la función
//const f = (x) =>  2 *math.pow(x,4)- 9 *math.pow(x,3)+19*x-11;

export const biseccion = (f, a, b, error) => {
  // intervalo inicial y la precisión deseada

  // variables de control
  let c;
  let iteracion = 0;

  // Crear la tabla con los encabezados
  const table = new Table({
    head: [
      "Iteración".cyan,
      "a".cyan,
      "f(a)".cyan,
      "b".cyan,
      "f(b)".cyan,
      "c".cyan,
      "f(c)".cyan,
      "err".cyan,
    ],
  });

  // Iteramos hasta alcanzar el error
  while (math.abs(b - a) > error) {
    //  El punto medio del intervalo
    c = (a + b) / 2;
    iteracion++;

    // Evaluamos la función en los extremos y en el punto medio
    const fa = f.evaluate({ x: a });
    const fb = f.evaluate({ x: b });
    const fc = f.evaluate({ x: c });
    let err = (b - a) / 2;

    // Agregar una fila con los datos de la iteración a la tabla
    table.push([
      iteracion.toString().blue,
      a.toString().green,
      fa.toString().green,
      b.toString().green,
      fb.toString().green,
      c.toString().green,
      fc.toString().green,
      err.toString(),
    ]);

    // Si la función evaluada en el punto medio es cero, hemos encontrado la raíz
    if (fc === 0) {
      break;
    }

    // Si la función evaluada en el punto medio tiene el mismo signo que la función evaluada en el extremo izquierdo del intervalo,
    // entonces la raíz está en el intervalo [c, b]
    if (math.sign(fc) === math.sign(fa)) {
      a = c;
    }

    // Si la función evaluada en el punto medio tiene el mismo signo que la función evaluada en el extremo derecho del intervalo,
    // entonces la raíz está en el intervalo [a, c]
    else {
      b = c;
    }
  }

  // Agregar la última fila con la raíz encontrada
  const fa = f.evaluate({ x: a });
  const fb = f.evaluate({ x: b });
  table.push([
    "",
    a.toString().green,
    fa.toString().green,
    b.toString().green,
    fb.toString().green,
    `La raíz es ${c}`.cyan,
  ]);

  // Mostrar la tabla en la consola
  console.log(table.toString());
};
