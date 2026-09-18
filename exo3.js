function triLignes(M) {
  for (let i = 0; i < M.length - 1; i++) {
    let positionMin = i;

    for (let j = i + 1; j < M.length; j++) {
      if (NombreUn(M[j]) < NombreUn(M[positionMin])) {
        positionMin = j;
      }
    }

    if (positionMin !== i) {
      Echanger(M, i, positionMin);
    }
  }

  return M;
}

module.exports = {
  NegatifPositif,
  Echanger,
  Ranger,
  NombreUn,
  triLignes
};