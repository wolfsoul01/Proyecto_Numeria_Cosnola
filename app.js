import colors from "colors";

import {
  mostrarMenu,
  menuBiseccion,
  pausa,
  funcion,
} from "./modules/inquire_menu.js ";
import { crearFuncion, evaluarFuncion } from "./algoritmos/evaluar_polin.js";
import { biseccion } from "./algoritmos/biseccion.js";
import { mostrarLogo } from "./modules/ascii.js";

const Main = async () => {
  let opt = "";

  do {
    opt = await mostrarMenu();

    switch (opt) {
      case "1":
        console.log(
          `Por favor ingrese la funcion usando estos caracteres para el correcto funcionamiento del programa: \nsuma: +\nresta: - \ndivision: / \nmultiplicacion: * \nelevacion a potencia: ^ \nUn ejemplo seria x^3*2x^2+7x+10\n`
        );
        const { f, x } = await funcion();
        console.log("La funcion es: ", `${f}`.gray);
        console.log("La evalucacion es: ", evaluarFuncion(f, Number(x)));
        break;

      case "2":
        const { p, a, b, error } = await menuBiseccion();
        const fcB = crearFuncion(p);
        console.log(fcB);

        await biseccion(fcB, Number(a), Number(b), error);
        break;

      case "3":
        console.log("Proximamente bro .....");
        break;

      case "4":
        console.log("Proximamente bro .....");
        break;
    }

    await pausa();
  } while (opt !== "0");
};

mostrarLogo();

setTimeout(Main, 2000);
