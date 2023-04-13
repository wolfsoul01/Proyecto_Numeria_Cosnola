import inquirer from "inquirer";
import colors from "colors";

const mostrarMenu = async () => {
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
          name: ` ${`2.`.green}Proximamente...`,
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

export default mostrarMenu;
