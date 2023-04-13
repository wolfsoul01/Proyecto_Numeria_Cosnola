import * as math from 'mathjs';

export const crearFuncion = (p, px) => {
  const f = math.parse(p).compile();
   return f.evaluate({x:px});
};
