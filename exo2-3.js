function NombreUn(T) {
  let compteur = 0;

  for (let i = 0; i < T.length; i++) {
    if (T[i] === 1) {
      compteur++;
    }
  }

  return compteur;
}