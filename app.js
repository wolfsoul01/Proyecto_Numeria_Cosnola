import colors from "colors";

import {mostrarMenu,menuBiseccion} from "./modules/inquire_menu.js ";
import pausa from "./modules/pausa.js";
import { funcion } from "./algoritmos/funcion.js";
import { crearFuncion, evaluarFuncion } from "./algoritmos/evaluar_polin.js";
import { biseccion } from "./algoritmos/biseccion.js";

const Main = async () => {
  
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
      console.log("La evalucacion es: ", evaluarFuncion(f, Number(x)));
    }
    else if(opt=2){
      const {p,a,b,error}= await menuBiseccion();
      const f=  crearFuncion(p);
      console.log(f);
      biseccion(f,1,2,0.1)
    }


    await pausa();
  } while (opt !== "3");
};

Main();
