function Echanger(T, i, j) {
  const temp = T[i];
  T[i] = T[j];
  T[j] = temp;
}