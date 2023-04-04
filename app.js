import colors from "colors";
import mostrarMenu from "./modules/inquire_menu.js ";

const Main = async () => {
  console.clear();


  let opt = await mostrarMenu();
  console.log(opt);
};

Main();
