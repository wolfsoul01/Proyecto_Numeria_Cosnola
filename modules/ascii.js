import figlet from "figlet";

export const mostrarLogo = async () => {
 return figlet.text(" Proyecto Numeria", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    return console.log(data,"\n Iniciando ...");
    
  });
};
