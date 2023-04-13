import inquirer from "inquirer";

const pausa = async () => {
  const questions = [
    {
      type: "input",
      name: "opt",
      message: `\n Presione ${`ENTER`.green} para continuar`,
    },
  ];

  return inquirer.prompt(questions);
};

export default pausa;
