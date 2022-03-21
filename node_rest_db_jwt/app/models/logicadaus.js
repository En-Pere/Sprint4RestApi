const dau1 = () => {
  const dau1 = Math.floor(6*Math.random()) + 1;
  return dau1;
};

const dau2 = () => {
  const dau2 = Math.floor(6*Math.random()) + 1;
  return dau2;
};

const resultado = () => {
  dau1();
  dau2();
  if (dau1 + dau2 == 7) {
    return "win"
  } else {
    return "loose"
  }
};

module.exports = {
  dau1,
  dau2,
  resultado
};

//console.log(resultado());

