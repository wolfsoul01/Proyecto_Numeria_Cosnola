import * as math from 'mathjs';

export const evaluarFuncion = (p, px) => {
  const f = math.parse(p).compile();
   return f.evaluate({x:px});
};

export const crearFuncion = (p) => {
    return  math.parse(p).compile();
  };
  