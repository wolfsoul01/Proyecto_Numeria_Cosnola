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
          name: ` ${`2.`.green}Biseccion...`,
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
          return "Ingrese un valor ";
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
          return "Ingrese un valor ";
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
          return "Ingrese un valor ";
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
          return "Ingrese un valor ";
        }
        return true;
      },
    },
  ];

  return  await inquirer.prompt(questions);
};
