function NegatifPositif(T) {
  let gauche = 0;
  let droite = T.length - 1;

  while (gauche <= droite) {
    while (gauche <= droite && T[gauche] <= 0) {
      gauche++;
    }

    while (gauche <= droite && T[droite] > 0) {
      droite--;
    }

    if (gauche < droite) {
      Echanger(T, gauche, droite);
    }
  }

  return T;
}