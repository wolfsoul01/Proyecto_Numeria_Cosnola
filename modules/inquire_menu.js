import inquirer from "inquirer";
import colors from 'colors'

const mostrarMenu = async () => {
  const questions = [
    {
      type: "list",
      name: "accion",
      message: "Que desea hacer ",
      choices: [
        {
          value: "1",
          name: `${`1.`.green} Calcular el error`,
        },
        {
          value: "2",
          name: ` ${`2.`.green}Calcular el intervalo de raices`,
        },
        {
          value: "3",
          name: ` ${`3.`.green}Separar Raices `,
        },
      ],
    },
  ];

   return await inquirer.prompt(questions);

};

export default mostrarMenu;