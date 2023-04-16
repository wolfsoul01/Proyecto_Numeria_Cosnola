import inquirer from "inquirer";
import colors from "colors";

export const mostrarMenu = async () => {
  console.clear();
  const questions = [
    {
      type: "list",
      name: "opcion",
      message: "Que desea hacer ",
      choices: [
        {
          value: "1",
          name: `${`1.`.green} Evaluar un polinomio `,
        },
        {
          value: "2",
          name: ` ${`2.`.green}Biseccion`,
        },
        {
          value: "3",
          name: ` ${`3.`.green}Proximamente...`,
        },
        {
          value: "3",
          name: ` ${`3.`.green}Proximamente...`,
        },
        {
          value: "3",
          name: ` ${`3.`.green}Proximamente...`,
        },
      ],
    },
  ];

  const { opcion } = await inquirer.prompt(questions);
  return opcion;
};

export const menuBiseccion = async() => {
  const questions = [
    {
      type: "input",
      name: "p",
      message: "Ingrese el polinomio ",
      validate: (input) => {
        if (input.lentgh === 0) {
          return ">>>".red, 'Por favor este campo no puede estar vacio' ;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "a",
      message: "El primer intervalo",
      validate: (input) => {
        if (input.lentgh === 0) {
          return ">>>".red, 'Por favor este campo no puede estar vacio'  ;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "b",
      message: "El 2do intervalo ",
      validate: (input) => {
        if (input.lentgh === 0) {
          return ">>>".red, 'Por favor este campo no puede estar vacio'  ;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "error",
      message: "Ingrese el error ",
      validate: (input) => {
        if (input.lentgh === 0) {
          return ">>>".red, 'Por favor este campo no puede estar vacio'  ;
        }
        return true;
      },
    },
  ];

  return  await inquirer.prompt(questions);
};

export const pausa = async () => {
  const questions = [
    {
      type: "input",
      name: "opt",
      message: `\n Presione ${`ENTER`.green} para continuar`,
    },
  ];

  return inquirer.prompt(questions);
};

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
