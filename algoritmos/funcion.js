import inquirer from "inquirer";
import { isNaN } from "mathjs";

export const funcion = async () => {
  const questions = [
    {
      type: "input",
      name: "f",
      message: " Ingrese la funcion a evaluar  ",
      validate: (input) => {
        let f = input;
        if (f.length == 0) {
          return ">>>".red, "Por favor este campo no puede estar vacio  ";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "x",
      message: " Ingrese el valor para evaluar",
      validate: (input) => {
        let x = input;

        if (x.length == 0) {
          return ">>>".red, "Por favor este campo no puede estar vacio  ";
        }
        if(isNaN(Number(x))){
          return "Por favor ingrese solo numeros ";
        }
        return true;
      },
    },
  ];
  return await inquirer.prompt(questions);
};
