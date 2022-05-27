/**
 * Compara a idade de duas pessoas e retorna uma string
 * indicando qual pessoa é mais velha, mais nova ou se são iguais
 *
 * @author Digital House
 * @param {string} nome1 o nome da primeira pessoa a comparar
 * @param {number} idade1 a idade da primeira pessoa a comparar
 * @param {string} nome2 o nome da segunda pessoa para comparar
 * @param {number} idade2 a idade da segunda pessoa para comparar
 */
export const maisVelho = (
  nome1: string,
  idade1: number,
  nome2: string,
  idade2: number
): string => {
  if (idade1 > idade2) {
    return `${nome1} é maior que ${nome2}`;
  } else if (idade1 < idade2) {
    return `${nome1} é menos do que ${nome2}`;
  } else return `${nome1} e ${nome2} eles tem a mesma idade`;
};
