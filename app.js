import colors from "colors";

import mostrarMenu from "./modules/inquire_menu.js ";
import pausa from "./modules/pausa.js";
import { funcion } from "./algoritmos/funcion.js";
import { crearFuncion } from "./algoritmos/evaluar_polin.js";

const Main = async () => {
  console.clear();
  let opt = "";

  do {
    opt = await mostrarMenu();
    //console.log(opt);
    if (opt === "1") {
      console.log(
        `Por favor ingrese la funcion usando estos caracteres para el correcto funcionamiento del programa: \nsuma: +\nresta: - \ndivision: / \nmultiplicacion: * \nelevacion a potencia: ^ \nUn ejemplo seria x^3*2x^2+7x+10\n`
      );
      const { f, x } = await funcion();
      console.log("La funcion es: ", `${f}`.gray);
      console.log("La evalucacion es: ", crearFuncion(f, Number(x)));
    }


    await pausa();
  } while (opt !== "3");
};

Main();
