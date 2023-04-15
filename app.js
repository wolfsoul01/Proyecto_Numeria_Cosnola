import colors from "colors";

import {mostrarMenu,menuBiseccion} from "./modules/inquire_menu.js ";
import pausa from "./modules/pausa.js";
import { funcion } from "./algoritmos/funcion.js";
import { crearFuncion, evaluarFuncion } from "./algoritmos/evaluar_polin.js";
import { biseccion } from "./algoritmos/biseccion.js";
import { number } from "mathjs";
import { mostrarLogo } from "./modules/ascii.js";

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
      console.log(p);
      console.log(a);
      console.log(b);
      console.log(error);
      console.log(f);

      await biseccion(f,Number(a),Number(b),error)
    }


    await pausa();
  } while (opt !== "3");
};

mostrarLogo();

setTimeout(Main,5000)